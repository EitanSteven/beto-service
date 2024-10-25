import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import weatherData from '../data/mockWeatherData.json';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeatherStats = () => {
    const [chartData, setChartData] = useState({});
    const [options, setOptions] = useState({});

    useEffect(() => {
        if (weatherData && weatherData.BuenosAires) {
            const summerData = weatherData.BuenosAires.summer.map(item => item.avgTemp);
            const winterData = weatherData.BuenosAires.winter.map(item => item.avgTemp);
            const years = weatherData.BuenosAires.summer.map(item => item.year);

            setChartData({
                labels: years,
                datasets: [
                    {
                        label: 'Verano (°C)',
                        data: summerData,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'transparent',
                        pointBackgroundColor: '#D4B737',
                        pointBorderColor: '#D4B737',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 3,
                        tension: 0.4
                    },
                    {
                        label: 'Invierno (°C)',
                        data: winterData,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'transparent',
                        pointBackgroundColor: '#318CE7',
                        pointBorderColor: '#318CE7',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 3,
                        tension: 0.4
                    }
                ]
            });

            setOptions({
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            color: '#fff',
                            font: {
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        titleFont: {
                            size: 16
                        },
                        bodyFont: {
                            size: 14
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#fff',
                            font: {
                                size: 12
                            }
                        },
                        grid: {
                            color: 'rgba(200, 200, 200, 0.2)'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#fff',
                            font: {
                                size: 12
                            }
                        },
                        grid: {
                            color: 'rgba(200, 200, 200, 0.2)'
                        }
                    }
                }
            });
        }
    }, []);

    return (
        <div>
            <h2>Temperaturas en Olavarría</h2>
            {chartData.labels ? <Line data={chartData} options={options} /> : <p>Loading chart data...</p>}
        </div>
    );
};

export default WeatherStats;
