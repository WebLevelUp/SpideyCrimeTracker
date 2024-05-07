import {app} from '../index.js';
import {createIncident, getAllIncidents} from "../data/incidentRepository.js";

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
        await createIncident(req.body);
        res.sendStatus(201);
    });
}
