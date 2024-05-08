export const apiUrl = 'http://spidey-crime-tracker-environment.eba-whvjczmu.eu-west-1.elasticbeanstalk.com/';

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
