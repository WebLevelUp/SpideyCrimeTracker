const routes = [
    {
        path: '/',
        data: 'sidebar.html'
    },
    {
        path: '/recent',
        data: 'recent.html'
    }
];

const content = document.getElementById('content');

function router(path) {
    const route = routes.find(route => route.path === path);
    loadPage(route.data).then(page => {
        const urlPath = `${path}`;
        content.innerHTML = page;
        history.pushState({}, '', urlPath);
    });
}

async function loadPage(filename) {
    const page = await fetch(`./html/${filename}`);
    return await page.text();
}

window.addEventListener('popstate', () => {
    let route = routes.find(route => route.path === location.pathname);
    loadPage(route.data).then(page => {
        content.innerHTML = page;
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const path = location.pathname || '/';
    router(path);
});
