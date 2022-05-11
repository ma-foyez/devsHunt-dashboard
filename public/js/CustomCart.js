$(document).ready(function () {

    /******************************* 
     * Chart JS
     * *************************** */

    /*************** Line Chart *********** */
    const ctx = document.getElementById('line_chart').getContext('2d');
    var xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    var yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
    new Chart(ctx, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: "#cc00225b",
                borderColor: "#cc0022",
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: 6, max: 16 } }],
            }
        }
    });
    /*************** Bar Chart *********** */
    const bar_cart = document.getElementById('bar_cart').getContext('2d');
    var xValues = ["MERN Stack", "Frontend", "Backend", "JavaScript", "Python", "C/C+++ Programming"];
    var yValues = [95, 49, 44, 50, 56, 35];
    var barColors = ["red", "green", "blue", "orange", "red", "gray"];

    new Chart(bar_cart, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "Course Overview of 2021-2022"
            }
        }
    });
    /*************** doughnut Chart *********** */
    const doughnut_cart = document.getElementById('doughnut_cart').getContext('2d');
    var xValues = ["Course Complete", "Irregular", "Top-5", "Already Hired", "Prepare Hired", "Complete 80%"];
    var yValues = [55, 49, 44, 24, 15, 25];
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145",
        "orange"
    ];

    new Chart(doughnut_cart, {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Student Running Progress"
            }
        }
    });

});

