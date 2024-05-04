import {app} from '../index.js';
import jwt from 'jsonwebtoken';

export function authController() {
    app.post('/auth/login', async (req, res) => {
        const githubCode = req.body.code;
        const githubClientId = process.env.GITHUB_CLIENT_ID;
        const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
        const accessTokenReqBody = JSON.stringify({
            'client_id': githubClientId,
            'client_secret': githubClientSecret,
            'code': githubCode
        });

        const accessTokenResponse = await fetch(`https://github.com/login/oauth/access_token`, {
            method: 'POST',
            body: accessTokenReqBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Content-Length': accessTokenReqBody.length
            }
        });

        const {access_token: accessToken} = await accessTokenResponse.json();

        const userDetailsResponse = await fetch('https://api.github.com/user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json',
            }
        });

        const {login: username} = await userDetailsResponse.json();
        // TODO save user if not exists with role 'user', else fetch user and role

        const role = 'user'; //TODO update after implementing roles
        const jwtSecret = process.env.JWT_SECRET;

        const jwtToken = jwt.sign({
            'username': username,
            'role': role
        }, jwtSecret, {expiresIn: '1h', issuer: 'spidey-crime-tracker'});

        res.send({
            'access_token': jwtToken,
            'username': username,
            'role': role
        });
    });
}
