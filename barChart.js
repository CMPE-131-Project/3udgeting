const ctx = document.getElementById('barChart').getContext('2d');
console.log(ctx);
let barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Today'],
        datasets: [{
            label: '$ Spent',
            data: [
              60.12,
              10.88,
              300.00,
              37.59,
              12,
              313,
              31.99
            ],
            backgroundColor: [
                'rgba(147, 240, 158, 1)',
                'rgba(147, 240, 158, 1)',
                'rgba(240, 155, 147, 1)',
                'rgba(147, 240, 158, 1)',
                'rgba(147, 240, 158, 1)',
                'rgba(240, 155, 147, 1)',
                'rgba(147, 240, 158, 1)'
            ],
            borderColor:'#777',
            borderWidth: 1
        }]
    },


    options: {

        title: {
          display: true,
          text: 'Weekly Spending',
          fontSize: 24
        },

        legend: {
          display: false,
          onClick: null
        },

        responsive: false,

        maintainAspectRatio: true,

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }


    }
});
