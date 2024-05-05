import {app} from '../index.js';
import {createRole, getAllRoles} from '../data/roleRepository.js';

export function roleController() {
    app.post('/role', async (req, res) => {
        const body = req.body;
        await createRole(body.roleType);
        res.sendStatus(201);
    });

    app.get('/role', async (req, res) => {
        const roles = await getAllRoles();
        res.send(roles);
    });
}
