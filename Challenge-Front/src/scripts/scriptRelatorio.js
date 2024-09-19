const salesCtx = document.getElementById('salesChart').getContext('2d');
const ordersCtx = document.getElementById('ordersChart').getContext('2d');

// Gráfico de Vendas
const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        datasets: [{
            label: 'Vendas',
            data: [20, 30, 40, 60, 50, 30],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Pedidos
const ordersChart = new Chart(ordersCtx, {
    type: 'radar',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        datasets: [{
            label: 'Pedidos',
            data: [30, 20, 50, 40, 60, 30],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                beginAtZero: true
            }
        }
    }
});

// Alternar Modo Escuro
document.getElementById('darkModeToggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
});
