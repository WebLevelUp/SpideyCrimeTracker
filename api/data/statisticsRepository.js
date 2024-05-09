import {executeStatement} from './dbConnection.js';

export function getCrimeStatistics() {
    let query = `SELECT a.province, COUNT(i.incidentId) AS totalIncidents FROM [Incident] i INNER JOIN [Hotspot] h ON i.hotspotId = h.hotspotId INNER JOIN [Area] a ON h.areaId = a.areaId GROUP BY a.province`;

    return executeStatement(query, []);
}