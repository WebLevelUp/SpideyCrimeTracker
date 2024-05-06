import {getToken} from './apiClient.js';
import {state} from './url-router.js';

export async function postAuth() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log('code: ' + code);
    const {access_token, role, username} = await getToken(code);
    state['access_token'] = access_token;
    state['role'] = role;
    state['username'] = username;
    console.log(JSON.stringify(state));
}
