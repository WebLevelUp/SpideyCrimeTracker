const routes = [
    {
        path: '/',
        filename: 'sidebar.html',
        scripts: ['sidebar.js']
    },
    {
        path: '/recent',
        filename: 'recent.html',
    },
    {
      path: '/home',
      filename: 'home.html'
    }
];

const content = document.getElementById('content');
const loadedScripts = [];

function router(path, saveHistory = true) {
    const route = routes.find(route => route.path === path);
    loadPage(route.filename).then(page => {
        const urlPath = `${path}`;
        content.innerHTML = page;
        if (saveHistory) {
            history.pushState({}, '', urlPath);
        }
    }).then(() => {
        if (route.scripts) {
            loadScripts(route.scripts);
        }
    });
}

async function loadPage(filename) {
    const page = await fetch(`./html/${filename}`);
    return await page.text();
}

function loadScripts(scripts) {
    scripts
        .filter((path) => !loadedScripts.includes(path))
        .map((path) => {
            const scriptElement = document.createElement('script');
            loadedScripts.push(path);
            scriptElement.setAttribute('src', `./script/${path}`);
            scriptElement.setAttribute('type', 'text/javascript');

            document.body.appendChild(scriptElement);

            scriptElement.addEventListener('load', () => {
                console.log('File loaded');
            });

            scriptElement.addEventListener('error', (err) => {
                console.log('Error on loading file: ', err);
            });
        });
}

window.addEventListener('popstate', () => {
    router(location.pathname, false);
});

window.addEventListener('DOMContentLoaded', () => {
    const path = location.pathname || '/';
    router(path);
});
