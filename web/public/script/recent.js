const crimeReports = [
    {
        area: "Downtown",
        province: "Gauteng",
        date: "2024-05-01",
        description: "A burglary occurred in a high-security area. Valuables were stolen.",
        typeOfCrime: "Burglary"
    },
    {
        area: "City Center",
        province: "Western Cape",
        date: "2024-04-15",
        description: "A personal mugging in the late evening. The victim was unharmed.",
        typeOfCrime: "Mugging"
    },
    {
        area: "Test",
        province: "KwaZulu-Natal",
        date: "2024-03-30",
        description: "Multiple cars were broken into during the night.",
        typeOfCrime: "Vehicle Break-in"
    }
];

function displayCrimeReports() {
    const container = document.querySelector('.cards-container');
    crimeReports.forEach(report => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${report.province} - ${report.area}</h3>
            <p>Date: ${report.date}</p>
            <p>Type of Crime: ${report.typeOfCrime}</p>
            <p>Description: ${report.description}</p>
        `;
        container.appendChild(card);
    });
}

displayCrimeReports()