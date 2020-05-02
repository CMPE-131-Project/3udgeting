const ctx2 = document.getElementById('pieChart').getContext('2d');
console.log(ctx2);
let pieChart = new Chart(ctx2, {
  type: 'pie',


  data: {
    labels: [
      "Food",
      "Housing",
      "Transportation",
      "Utilities",
      "Insurance"
    ],


    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"
      ],

      data: [
        2478,
        3267,
        734,
        784,
        433]

    }]


   },


   options: {
     title: {
       display: true,
       text: 'Budget',
       fontSize: 24,
     },


     responsive: false,

     maintainAspectRatio: true,




   }
});
