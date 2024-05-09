import {app} from '../index.js';
import {getAllUsers, updateUser} from '../data/userRepository.js';

export function userController() {
    app.post('/user', async (req, res) => {
        const user = req.body;
        await updateUser(user);
        res.sendStatus(204);
    });

    app.get('/user', async (req, res) => {
        const users = await getAllUsers();
        res.send(users);
    });
}
