function displayCrimeReports() {
    const container = document.querySelector('.cards-container');
    const template = container.querySelector('#crimeReportTemplate').content;

    const crimeReports = [
        {
            area: "Downtown",
            province: "Gauteng",
            date: "2024-05-01",
            description: "A burglary occurred in a high-security area. Valuables were stolen.",
            typeOfCrime: "Burglary"
        },
        {
            area: "CBD",
            province: "Gauteng",
            date: "2024-05-05",
            description: "Test description.",
            typeOfCrime: "Test"
        },
        {
            area: "City Center",
            province: "Western Cape",
            date: "2024-04-15",
            description: "A personal mugging in the late evening. The victim was unharmed.",
            typeOfCrime: "Mugging"
        },
        {
            area: "Suburb",
            province: "KwaZulu-Natal",
            date: "2024-03-30",
            description: "Multiple cars were broken into during the night.",
            typeOfCrime: "Vehicle Break-in"
        }
    ];

    crimeReports.forEach(report => {
        const card = document.importNode(template, true);
        card.querySelector('.crime-area').textContent = `${report.area}`;
        card.querySelector('.crime-province').textContent = `${report.province}`;
        card.querySelector('.crime-date').textContent = `Date: ${report.date}`;
        card.querySelector('.crime-type').textContent = `Type of Crime: ${report.typeOfCrime}`;
        card.querySelector('.crime-description').textContent = `Description: ${report.description}`;

        container.appendChild(card);
    });
}

displayCrimeReports()

function filterCards() {
    const area = document.getElementById('filterArea').value.toLowerCase();
    const province = document.getElementById('filterProvince').value.toLowerCase();
    const date = document.getElementById('filterDate').value;
    const type = document.getElementById('filterType').value.toLowerCase();
    
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardArea = card.querySelector('.crime-area').textContent.toLowerCase();
        const cardProvince = card.querySelector('.crime-province').textContent.toLowerCase();
        const cardDate = card.querySelector('.crime-date').textContent.replace('Date: ', '');
        const cardType = card.querySelector('.crime-type').textContent.toLowerCase();

        const areaMatch = area ? cardArea.includes(area) : true;
        const ProvinceMatch = province ? cardProvince.includes(province) : true;
        const dateMatch = date ? cardDate === date : true;
        const typeMatch = type ? cardType.includes(type) : true;

        if (areaMatch && ProvinceMatch && dateMatch && typeMatch) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}
document.getElementById('filterArea').addEventListener('input', filterCards);
document.getElementById('filterProvince').addEventListener('input', filterCards);
document.getElementById('filterDate').addEventListener('change', filterCards);
document.getElementById('filterType').addEventListener('input', filterCards);
