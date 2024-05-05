import {executeStatement} from './dbConnection.js';
import {TYPES} from 'tedious';

const tableName = 'SpideyCrimeTrackerDB.dbo.Hotspot';

/**
 *
 * @return {Promise<Hotspot[]>} - Array of hotspot objects
 */
export function getAllHotspots() {
    const query =
        `SELECT *
         FROM ${tableName}`;
    return executeStatement(query, []);
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


