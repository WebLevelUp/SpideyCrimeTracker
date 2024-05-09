import {getAllProvinces, getIncidentStatistics} from "./apiClient.js";

function load(){
    function createBar(value, max) {
        const bar = document.createElement('section');
        bar.classList.add('bar');
        bar.style.height = `${(value / max) * 100}%`;

        const barLabel = document.createElement('section');
        barLabel.classList.add('bar-label');
        barLabel.textContent = value;
        bar.appendChild(barLabel);

        return bar;
    }

    function populateYAxis(max, numberLabel) {
        const yAxis = document.getElementById('yAxis');

        yAxis.innerHTML = '';

        const increment = max / (numberLabel - 1);

        for (let i = numberLabel - 1; i >= 0; i--) {
            const label = document.createElement('section');
            label.textContent = Math.round(i * increment);
            yAxis.appendChild(label);
        }
    }

    function populateBarChart(data) {
        const barChart = document.getElementById('barChart');
        const xAxis = document.getElementById('xAxis');

        barChart.innerHTML = '';
        xAxis.innerHTML = '';

        const maxValue = Math.max(...data.map(item => item.value));

        data.forEach(item => {
            const bar = createBar(item.value, maxValue);
            barChart.appendChild(bar);

            const xAxisLabel = document.createElement('section');
            xAxisLabel.textContent = item.label;
            xAxis.appendChild(xAxisLabel);
        });

        populateYAxis(maxValue, graphData.length + 1);
    }

    const sampleData = [
        { label: 'A', value: 30 },
        { label: 'B', value: 50 },
        { label: 'C', value: 75 },
        { label: 'D', value: 100 },
        { label: 'E', value: 54 },
    ];


    const graphData = [];

    getIncidentStatistics().then((stats) => {
        stats.map(stat => {
            const label = stat.province;
            const value = stat.totalIncidents;
            graphData.push({label, value});
        });
        populateBarChart(graphData)
        }
    );
}

document.addEventListener('statistics.js', () => {
    load();
});