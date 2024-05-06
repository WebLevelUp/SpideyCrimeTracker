import {executeStatement} from './dbConnection.js';
import {TYPES} from 'tedious';

const tableName = 'SpideyCrimeTrackerDB.dbo.HotspotType';

/**
 *
 * @return {Promise<HotspotType[]>} - Array of area objects
 */
export function getAllHotspotTypes() {
    const query =
        `SELECT *
         FROM ${tableName}`;
    return executeStatement(query, []);
}

/**
 *
 * @param {HotspotTypeCreateDto} hotspotTypeDto - Area DTO to create hotspotType
 *
 * @return {Promise<HotspotType[]>} - Array of hotspotType objects
 */
export function createHotspotType(hotspotTypeDto) {
    const query = `INSERT INTO ${tableName} (hotspotType)
                   VALUES (@hotspotType)`;
    const params = [
        {name: 'hotspotType', type: TYPES.Int, value: hotspotTypeDto.hotspotType},
    ];

    return executeStatement(query, params);
}


