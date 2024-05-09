import {app} from '../index.js';
import {getCrimeStatistics} from '../data/statisticsRepository.js';

export function statisticsController() {
    app.get('/area', async (req, res) => {
        res.send(await getCrimeStatistics());
    });
}