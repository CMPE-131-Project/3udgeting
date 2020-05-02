var ctx3 = document.getElementById('monthChart').getContext('2d');
console.log(ctx3);



var monthChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
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
          text: 'Monthly Spending',
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
