/**
 *
 * @param {Request<>} req
 * @param {Response<ResBody, LocalsObj>} res
 * @param {function()} next
 */
export function authorizationMiddleware(adminRoutes) {
    return (req, res, next) => {
        if (req.path === '/auth/login') {
            console.debug('Skipping auth for login endpoint');
            return next();
        }

        const role = req.headers.role;
        const method = req.method;
        const route = req.path;
        const protectedMethods = adminRoutes[route];
        
        if (protectedMethods.includes(method) && role !== 'admin') {
            res.send(403);
        }

        return next();
    };
}
