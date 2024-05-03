import {app} from '../index.js';
import {createArea, getAllAreas} from '../data/areaRepository.js';

export function areaController() {
    app.get('/area', async (req, res) => {
        res.send(await getAllAreas());
    });

    app.post('/area', async (req, res) => {
        await createArea(req.body);
        res.sendStatus(201);
    });
}
