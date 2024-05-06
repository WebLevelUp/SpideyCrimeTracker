export const apiUrl = 'http://localhost:3000';

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
