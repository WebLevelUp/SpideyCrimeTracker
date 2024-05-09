import {app} from '../index.js';
import {createHotspotType, getAllHotspotTypes} from '../data/hotspotTypeRepository.js';

export function hotspotTypeController() {
    app.get('/hotspotType', async (req, res) => {
        res.send(await getAllHotspotTypes());
    });

    app.post('/hotspotType', async (req, res) => {
        await createHotspotType(req.body);
        res.sendStatus(201);
    });
}

