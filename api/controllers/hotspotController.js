import {app} from '../index.js';
import {createHotspot, getAllHotspots} from '../data/hotspotRepository.js';

export function hotspotController() {
    app.get('/hotspot', async (req, res) => {
        let options = {};
        const queryParams = req.query;
        if (queryParams.areaID) {
            const areaID = parseInt(queryParams.areaID, 10);
            if (isNaN(areaID)) {
                return res.status(400).send('Invalid areaID');
            } else {
                options.areaID = areaID;
            }
        }
        if (queryParams.hotspotID) {
            const hotspotID = parseInt(queryParams.hotspotID, 10);
            if (isNaN(hotspotID)) {
                return res.status(400).send('Invalid hotspotID');
            } else {
                options.hotspotID = hotspotID;
            }
        }

        res.send(await getAllHotspots(options));
    });

    app.post('/hotspot', async (req, res) => {
        await createHotspot(req.body);
        res.sendStatus(201);
    });
}
