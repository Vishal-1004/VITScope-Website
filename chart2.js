var ctx = document.getElementById('barchart2').getContext('2d');
var barchart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Total Student Placed',
            data: [3349, 4381, 4914, 5609, 7462],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});