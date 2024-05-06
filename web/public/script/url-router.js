const routes = [
    {
        path: '/',
        filename: 'sidebar.html',
        scripts: ['sidebar.js']
    },
    {
        path: '/report',
        filename: 'report.html',
        scripts: ['report.js', 'sidebar.js'],
        styles: ['report.css', 'sidebar.css'],
        // includeSidebar: true 
    },
    {
        path: '/recent',
        filename: 'recent.html',
        scripts: ['recent.js'],
        styles: ['recent.css'],
        // includeSidebar: true 
    }
];

const content = document.getElementById('content');
const loadedScripts = [];
const loadedStyles = []

function router(path, saveHistory = true) {
    const route = routes.find(route => route.path === path);
    loadPage(route.filename).then(page => {
        const urlPath = `${path}`;
        content.innerHTML = page;
        if (saveHistory) {
            history.pushState({}, '', urlPath);
        }
    }).then(() => {
        if (route.includeSidebar) {
            loadSidebar();
            loadScripts(route.scripts);
        }
        if (route.scripts) {
            loadScripts(route.scripts);
        }
        if (route.styles) {
            loadStyles(route.styles);
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

function loadStyles(styles) {
    styles
        .filter((path) => !loadedStyles.includes(path))
        .map((path) => {
            const styleElement = document.createElement('link');
            loadedStyles.push(path);
            styleElement.setAttribute('href', `./css/${path}`);
            styleElement.setAttribute('rel', 'stylesheet');

            document.head.appendChild(styleElement);

            styleElement.addEventListener('load', () => {
                console.log('Style loaded');
            });

            styleElement.addEventListener('error', (err) => {
                console.log('Error on loading style: ', err);
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

async function loadSidebar() {
    const sidebar = await loadPage('sidebar.html');
    content.innerHTML += sidebar;
}
