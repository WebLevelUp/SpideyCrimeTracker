import {app} from '../index.js';
import {createHotspotTypeIfNotExists, getAllHotspotTypes} from '../data/hotspotTypeRepository.js';

export function hotspotTypeController() {
    app.get('/hotspotType', async (req, res) => {
        const hotspotTypes = await getAllHotspotTypes();
        res.send(hotspotTypes);
    });

    app.post('/hotspotType', async (req, res) => {
        await createHotspotTypeIfNotExists(req.body);
        res.sendStatus(201);
    });
}

