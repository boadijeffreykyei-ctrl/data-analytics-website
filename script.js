// Update current date and time
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', options);
}

updateDateTime();
setInterval(updateDateTime, 60000); // Update every minute

// Chart.js color scheme
const chartColors = {
    primary: '#2563eb',
    accent: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    secondary: '#8b5cf6'
};

// Revenue Trend Chart (Line Chart)
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Revenue ($)',
            data: [12500, 15200, 14800, 18900, 21200, 19800, 16400],
            borderColor: chartColors.primary,
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: chartColors.primary,
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointHoverRadius: 7
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                labels: {
                    color: '#cbd5e1'
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    color: '#cbd5e1',
                    callback: function(value) {
                        return '$' + value.toLocaleString();
                    }
                },
                grid: {
                    color: 'rgba(51, 65, 85, 0.5)'
                }
            },
            x: {
                ticks: {
                    color: '#cbd5e1'
                },
                grid: {
                    color: 'rgba(51, 65, 85, 0.5)'
                }
            }
        }
    }
});

// User Distribution by Region (Pie Chart)
const regionCtx = document.getElementById('regionChart').getContext('2d');
new Chart(regionCtx, {
    type: 'doughnut',
    data: {
        labels: ['North America', 'Europe', 'Asia', 'Others'],
        datasets: [{
            data: [35, 28, 22, 15],
            backgroundColor: [
                chartColors.primary,
                chartColors.accent,
                chartColors.secondary,
                chartColors.warning
            ],
            borderColor: '#1e293b',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                labels: {
                    color: '#cbd5e1',
                    padding: 15
                }
            }
        }
    }
});

// Traffic Sources (Bar Chart)
const trafficCtx = document.getElementById('trafficChart').getContext('2d');
new Chart(trafficCtx, {
    type: 'bar',
    data: {
        labels: ['Direct', 'Search', 'Social', 'Referral', 'Email'],
        datasets: [{
            label: 'Visitors',
            data: [2400, 3200, 1800, 2100, 1600],
            backgroundColor: [
                chartColors.primary,
                chartColors.accent,
                chartColors.secondary,
                chartColors.warning,
                chartColors.danger
            ],
            borderRadius: 8,
            borderSkipped: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                labels: {
                    color: '#cbd5e1'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#cbd5e1'
                },
                grid: {
                    color: 'rgba(51, 65, 85, 0.5)'
                }
            },
            y: {
                ticks: {
                    color: '#cbd5e1'
                },
                grid: {
                    display: false
                }
            }
        }
    }
});

// Daily Active Users (Area Chart)
const activeUsersCtx = document.getElementById('activeUsersChart').getContext('2d');
new Chart(activeUsersCtx, {
    type: 'line',
    data: {
        labels: ['6 Jun', '7 Jun', '8 Jun', '9 Jun', '10 Jun', '11 Jun', '12 Jun'],
        datasets: [{
            label: 'Active Users',
            data: [5200, 6100, 5900, 7200, 8100, 7800, 8429],
            borderColor: chartColors.accent,
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: chartColors.accent,
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointHoverRadius: 7
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                labels: {
                    color: '#cbd5e1'
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    color: '#cbd5e1'
                },
                grid: {
                    color: 'rgba(51, 65, 85, 0.5)'
                }
            },
            x: {
                ticks: {
                    color: '#cbd5e1'
                },
                grid: {
                    color: 'rgba(51, 65, 85, 0.5)'
                }
            }
        }
    }
});

// Add hover effects to metric cards
document.querySelectorAll('.metric-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add active state to nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Simulate real-time data updates
function updateMetrics() {
    // Generate random variations for demo purposes
    const metricValues = document.querySelectorAll('.metric-value');
    
    metricValues.forEach((metric, index) => {
        const currentValue = metric.textContent;
        // This is just for demo - in production you'd fetch real data from an API
    });
}

// Update metrics every 30 seconds (optional)
// setInterval(updateMetrics, 30000);

console.log('Dashboard initialized successfully!');