import jwt from 'jsonwebtoken';

/**
 *
 * @param {Request<>} req
 * @param {Response<ResBody, LocalsObj>} res
 * @param next
 */
export function authMiddleware(req, res, next) {
    const path = req.path;
    if (req.path === '/auth/login') {
        console.debug('Skipping auth for login endpoint');
        return next();
    }

    const bearerToken = req.get('Authorization');

    if (!bearerToken) {
        return res.sendStatus(401);
    }

    const [tokenType, token] = bearerToken.split(' ');
    if (!token || tokenType !== 'Bearer') {
        return res.sendStatus(401);
    }

    const jwtSecret = process.env.JWT_SECRET;
    try {
        jwt.verify(token, jwtSecret, {issuer: 'spidey-crime-tracker'});
    } catch (err) {
        return res.status(401).send({'Error': 'Token invalid. Please login again'});
    }

    return next();
}
