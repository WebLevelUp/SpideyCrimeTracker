export const apiUrl = 'http://spidey-crime-tracker-environment.eba-whvjczmu.eu-west-1.elasticbeanstalk.com';

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

export async function getIncidents() {
  return fetch(`${ apiUrl }/incident`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getAccessToken()
    },
  }).then((r) => r.json());
}

export async function getHotSpots() {
  return fetch(`${ apiUrl }/hotspot`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getAccessToken()
    },
  }).then((r) => r.json());
}

export async function getHotSpotTypes() {
  return fetch(`${ apiUrl }/hotspotType`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getAccessToken()
    },
  }).then((r) => r.json());
}

export async function getAreas() {
  return fetch(`${ apiUrl }/area`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getAccessToken()
    },
  }).then((r) => r.json());
}
