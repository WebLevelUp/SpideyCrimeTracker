import {executeStatement} from './dbConnection.js';
import {TYPES} from 'tedious';

const tableName = 'SpideyCrimeTrackerDB.dbo.Incident';

/**
 *
 * @param {Object} options - Optional parameters for filtering hotspots
 * @param {number} [options.incidentID] - Incident ID to filter by
 * @param {number} [options.hotspotTypeID] - Hotspot Type ID to filter by
 *
 * @return {Promise<Hotspot[]>} - Array of hotspot objects
 */
export function getAllIncidents(options = {}) {
    let query = `SELECT * FROM ${tableName}`;
    const params = [];

    if (options.incidentID !== undefined) {
        query += ' WHERE incidentID = @incidentID';
        params.push({name: 'incidentID', type: TYPES.Int, value: options.incidentID});
    } else if (options.hotspotTypeID !== undefined) {
        query += ' WHERE hotspotTypeID = @hotspotTypeID';
        params.push({name: 'hotspotTypeID', type: TYPES.Int, value: options.hotspotTypeID});
    }

    return executeStatement(query, params);
}

/**
 *
 * @param {IncidentCreateDto} incidentDto - Hotspot DTO to create hotspot
 *
 * @return {Promise<Hotspot[]>} - Array of hotspot objects
 */
export function createIncident(incidentDto) {
    const query = `INSERT INTO ${tableName} (date, description, userID, hotspotID)
                   VALUES (@date, @description, @userID, @hotspotID);`;
    const params = [
        {name: 'date', type: TYPES.DateTime2, value: incidentDto.date},
        {name: 'description', type: TYPES.VarChar, value: incidentDto.description},
        {name: 'userID', type: TYPES.Int, value: incidentDto.userID},
        {name: 'hotspotID', type: TYPES.Int, value: incidentDto.hotspotID},
    ];

    return executeStatement(query, params);
}