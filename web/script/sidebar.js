function toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    let btn = document.querySelector('.btn');
    
    sidebar.classList.toggle('active');
    btn.classList.toggle('change');
}

document.querySelector('.btn').onclick = toggleSidebar;

// const sidebarItems = [
//     { icon: '../images/spyware.jpg', text: 'Report a crime', tooltip: 'Report a crime', link: '#' },
//     { icon: '../images/web.jpg', text: 'View Statistics', tooltip: 'View Statistics', link: '#' },
//     { icon: '../images/investigation.jpg', text: 'View recent crimes', tooltip: 'View recent crimes', link: '#' }
// ];

// function generateSidebar() {
//     const sidebarList = document.getElementById('sidebarList');

//     sidebarItems.forEach(item => {
//         const listItem = document.createElement('li');
//         const link = document.createElement('a');
//         const icon = document.createElement('img');
//         const text = document.createElement('span');
//         const tooltip = document.createElement('span');

//         link.href = item.link;
//         icon.src = item.icon;
//         icon.className = 'user-icon';
//         icon.alt = item.text;
//         text.className = 'nav-item';
//         text.textContent = item.text;
//         tooltip.className = 'tooltip';
//         tooltip.textContent = item.tooltip;

//         link.appendChild(icon);
//         link.appendChild(text);
//         listItem.appendChild(link);
//         listItem.appendChild(tooltip);
//         sidebarList.appendChild(listItem);
//     });
// }

// generateSidebar();
