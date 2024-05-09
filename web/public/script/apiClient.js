export const apiUrl = 'http://localhost:3000';

function getAccessToken() {
    return `Bearer ${localStorage.getItem('access_token')}`;
}

export async function getToken(code) {
    const body = {
        code,
    };

    const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });

    return response.json();
}

export async function getAllProvinces() {
    const response = await fetch(`${apiUrl}/area/province`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getAccessToken()
        },
    });

    return response.json();
}

export async function getSuburbsForProvince(province) {
    const params = new URLSearchParams({province}).toString();
    const response = await fetch(`${apiUrl}/area/suburb?${params}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getAccessToken()
        },
    });

    return response.json();
}

export async function getAllCrimeTypes() {
    const response = await fetch(`${apiUrl}/hotspotType`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getAccessToken()
        },
    });

    return response.json();
}

export async function createIncident(data) {
    const response = await fetch(`${apiUrl}/incident`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getAccessToken()
        },
        body: JSON.stringify(data)
    });

    return response.json();
}

export async function getIncidentStatistics() {
    const response = await fetch(`${apiUrl}/incidents/statistics`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getAccessToken()
        },
    });

    return response.json();
}