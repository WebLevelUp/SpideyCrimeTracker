import {app} from '../index.js';
import {createIncident, getAllIncidents, getCrimeStatistics} from '../data/incidentRepository.js';
import {IncidentCreateDto} from '../dtos/incidentCreateDto.js';
import {getUserByUsername} from '../data/userRepository.js';
import {getOrCreateHotspot} from '../data/hotspotRepository.js';

export function incidentController() {
    app.get('/incident', async (req, res) => {
        let options = {};
        const queryParams = req.query;
        if (queryParams.incidentID) {
            const incidentID = parseInt(queryParams.incidentID, 10);
            if (isNaN(incidentID)) {
                return res.status(400).send('Invalid incidentID');
            } else {
                options.incidentID = incidentID;
            }
        } else if (queryParams.hotspotID) {
            const hotspotID = parseInt(queryParams.hotspotID, 10);
            if (isNaN(hotspotID)) {
                return res.status(400).send('Invalid hotspotID');
            } else {
                options.hotspotID = hotspotID;
            }
        }

        res.send(await getAllIncidents(options));
    });

    app.post('/incident', async (req, res) => {
        const body = req.body;
        const {hotspotTypeId, description, date, areaId} = body;
        const username = req.headers.username;
        const user = await getUserByUsername(username);
        const hotspot = await getOrCreateHotspot(areaId, hotspotTypeId);
        const incidentCreateDto = new IncidentCreateDto(date, description, user.userId, hotspot.hotspotId);
        await createIncident(incidentCreateDto);
        res.sendStatus(201);
    });


    app.get('/incidents/statistics', async (req, res) => {
        res.send(await getCrimeStatistics());
    });
}
