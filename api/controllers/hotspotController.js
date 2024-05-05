import {app} from '../index.js';
import {createHotspot, getAllHotspots} from '../data/hotspotRepository.js';

export function hotspotController() {
    app.get('/hotspot', async (req, res) => {
        res.send(await getAllHotspots());
    });

    app.post('/hotspot', async (req, res) => {
        await createHotspot(req.body);
        res.sendStatus(201);
    });
}
