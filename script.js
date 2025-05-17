        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });

        document.getElementById('sidebarCollapse').addEventListener('click', function () {
            document.getElementById('sidebar').classList.toggle('sidebar-collapsed');
            document.getElementById('mainContent').classList.toggle('main-content-expanded');
        });

        document.getElementById('sidebarCollapseMobile').addEventListener('click', function () {
            document.getElementById('sidebar').classList.remove('sidebar-show');
        });

        document.getElementById('darkModeToggle').addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');

            const icon = this.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });

        document.addEventListener('DOMContentLoaded', function () {

            const revenueCtx = document.getElementById('revenueChart').getContext('2d');
            const revenueChart = new Chart(revenueCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Revenue',
                        data: [1200, 1900, 1500, 2000, 2200, 2500, 2800, 3000, 2700, 3500, 4000, 4500],
                        backgroundColor: 'rgba(67, 97, 238, 0.1)',
                        borderColor: 'rgba(67, 97, 238, 1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: 'rgba(67, 97, 238, 1)',
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleFont: {
                                size: 14
                            },
                            bodyFont: {
                                size: 12
                            },
                            padding: 12,
                            cornerRadius: 4,
                            displayColors: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                drawBorder: false,
                                color: 'rgba(0, 0, 0, 0.05)'
                            },
                            ticks: {
                                callback: function (value) {
                                    return '$' + value;
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });

            const trafficCtx = document.getElementById('trafficChart').getContext('2d');
            const trafficChart = new Chart(trafficCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Direct', 'Referral', 'Social', 'Organic'],
                    datasets: [{
                        data: [45, 25, 20, 10],
                        backgroundColor: [
                            'rgba(67, 97, 238, 0.8)',
                            'rgba(72, 149, 239, 0.8)',
                            'rgba(76, 201, 240, 0.8)',
                            'rgba(114, 9, 183, 0.8)'
                        ],
                        borderColor: [
                            'rgba(67, 97, 238, 1)',
                            'rgba(72, 149, 239, 1)',
                            'rgba(76, 201, 240, 1)',
                            'rgba(114, 9, 183, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 20,
                                usePointStyle: true,
                                pointStyle: 'circle'
                            }
                        }
                    }
                }
            });

            window.addEventListener('resize', function () {
                revenueChart.resize();
                trafficChart.resize();
            });
        });