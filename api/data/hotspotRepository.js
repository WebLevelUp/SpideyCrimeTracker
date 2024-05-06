import {executeStatement} from './dbConnection.js';
import {TYPES} from 'tedious';

const tableName = 'SpideyCrimeTrackerDB.dbo.Hotspot';

/**
 *
 * @param {Object} options - Optional parameters for filtering hotspots
 * @param {number} [options.areaID] - Area ID to filter by
 * @param {number} [options.hotspotTypeID] - Hotspot Type ID to filter by
 *
 * @return {Promise<Hotspot[]>} - Array of hotspot objects
 */
export function getAllHotspots(options = {}) {
    let query = `SELECT * FROM ${tableName}`;
    const params = [];

    if (options.areaID !== undefined) {
        query += ' WHERE areaID = @areaID';
        params.push({name: 'areaID', type: TYPES.Int, value: options.areaID});
    }

    if (options.hotspotTypeID !== undefined) {
        // If there's already a WHERE clause, append with AND
        if (params.length > 0) {
            query += ' AND hotspotTypeID = @hotspotTypeID';
        } else {
            query += ' WHERE hotspotTypeID = @hotspotTypeID';
        }
        params.push({name: 'hotspotTypeID', type: TYPES.Int, value: options.hotspotTypeID});
    }

    return executeStatement(query, params);
}

/**
 *
 * @param {HotspotCreateDto} hotspotDto - Hotspot DTO to create hotspot
 *
 * @return {Promise<Hotspot[]>} - Array of hotspot objects
 */
export function createHotspot(hotspotDto) {
    const query = `INSERT INTO ${tableName} (description, areaID, hotspotTypeID)
                   VALUES (@description, @areaID, @hotspotTypeID);`;
    const params = [
        {name: 'description', type: TYPES.VarChar, value: hotspotDto.description},
        {name: 'areaID', type: TYPES.Int, value: hotspotDto.areaID},
        {name: 'hotspotTypeID', type: TYPES.Int, value: hotspotDto.hotspotTypeID},
    ];

    return executeStatement(query, params);
}