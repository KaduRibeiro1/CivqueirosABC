document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['G5', 'G6', 'G7', 'G8', 'G9', 'G10'], // Grupos fictícios
        datasets: [{
          label: 'Proprietários',
          data: [3, 6, 4, 5, 2, 1], // Quantidade fictícia
          backgroundColor: ['#ff0000', '#ff3333', '#ff6666', '#ff9999', '#ffcccc', '#ffe6e6'], // Cores
          borderColor: '#ffffff',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: '#ffffff', // Cor da legenda
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#ffffff',
            },
            grid: {
              color: '#444',
            },
          },
          y: {
            ticks: {
              color: '#ffffff',
            },
            grid: {
              color: '#444',
            },
          },
        },
      },
    });
  });
  
