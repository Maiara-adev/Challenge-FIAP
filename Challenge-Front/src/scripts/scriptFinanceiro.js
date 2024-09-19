var ctxPie = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Funcionários', 'Ingredientes', 'Marketing', 'Outros'],
        datasets: [{
            data: [30, 50, 15, 5],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#cc65fe'],
            hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#cc65fe']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    boxWidth: 20
                }
            }
        }
    }
});

// Gráfico de Barras
var ctxBar = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Receitas', 'Despesas', 'Balanço'],
        datasets: [{
            label: 'Valores',
            data: [3000, 1350, 1650],
            backgroundColor: ['#36a2eb', '#ff6384', '#4bc0c0'],
            borderColor: ['#36a2eb', '#ff6384', '#4bc0c0'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return 'R$' + value;
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Gráfico de Linhas
var ctxLine = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Desempenho Anual',
            data: [1000, 1500, 2000, 1800, 2200, 2500],
            borderColor: '#ff6384',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    boxWidth: 20
                }
            }
        }
    }
});