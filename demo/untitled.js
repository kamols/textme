var chartColor = "#FFFFFF",
  // General configuration for the charts with Line gradientStroke
  gradientChartOptionsConfiguration = {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'top',
      align: 'center',
      labels: {
          fontColor: 'white'
      }
    }
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [{
        display: 0,
        gridLines: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }],
      xAxes: [{
        display: 0,
        gridLines: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }]
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 15,
        bottom: 15
      }
    }
  }

  // Dashboard chart element
  ctx = document.getElementById('bigDashboardChart').getContext("2d"),
  chartType = 'bar', //Chart type
  myChart,

  // Graident stroke
  gradientStroke = ctx.createLinearGradient(500, 30, 100, 0);
  gradientStroke.addColorStop(0, '#55bb8b');
  gradientStroke.addColorStop(1, chartColor);

// Gradient Fill
var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

initDashboardPageCharts();

initDashboardPageCharts: function() {
  this.myChart = new Chart(this.ctx, {
    type: this.chartType,
    responsive: true,
    options: this.gradientChartOptionsConfiguration,
  data: {
    labels: ["MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC","JAN", "FEB"],
    datasets: [
      { 
        label: "New Students",
        borderColor: this.chartColor,
        pointBorderColor: this.chartColor,
        pointBackgroundColor: "#55bb8b",
        pointHoverBackgroundColor: "#55bb8b",
        pointHoverBorderColor: this.chartColor,
        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        borderColor: "#55bb8b",
        fill: true,
        backgroundColor: this.gradientFill,
        borderWidth: 2,
        data: [50, 150, 100, 80, 130, 90, 150, 160, 120, 140, 190, 95]
      }, 
      // { 
      //     label: "Active Students",
      //     borderColor: chartColor,
      //     pointBorderColor: chartColor,
      //     pointBackgroundColor: "#F89C1C",
      //     pointHoverBackgroundColor: "#F89C1C",
      //     borderColor: "#F89C1C",
      //     pointHoverBorderColor: chartColor,
      //     pointBorderWidth: 1,
      //     pointHoverRadius: 7,
      //     pointHoverBorderWidth: 2,
      //     pointRadius: 5,
      //     fill: true,
      //     backgroundColor: gradientFill,
      //     borderWidth: 2,
      //     data: [ 150, 100, 80, 130, 90, 150, 160, 120, 140, 190, 95, 50]
      // }, 

      { 
        label: "Students Completed",
        borderColor: this.chartColor,
        pointBorderColor: this.chartColor,
        pointBackgroundColor: "#2CA8FF",
        pointHoverBackgroundColor: "#2CA8FF",
        borderColor: "#2CA8FF",
        pointHoverBorderColor: this.chartColor,
        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,
        backgroundColor: this.gradientFill,
        borderWidth: 2,
        data: [ 80, 130, 90, 150, 160, 120, 140, 190, 95, 50, 150, 100]
      }, 

      { 
        label: "Students Not Interested",
        borderColor: this.chartColor,
        pointBorderColor: this.chartColor,
        pointBackgroundColor: "#f96332",
        pointHoverBackgroundColor: "#f96332",
        borderColor: "#f96332",
        pointHoverBorderColor: this.chartColor,
        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,
        backgroundColor: this.gradientFill,
        borderWidth: 2,
        data: [ 150, 160, 120, 140, 190, 95, 50, 150, 100,80, 130, 90 ]
      }, 
      // { 
      //     label: "Students Paused",
      //     borderColor: chartColor,
      //     pointBorderColor: chartColor,
      //     pointBackgroundColor: "red",
      //     pointHoverBackgroundColor: "red",
      //     borderColor: "red",
      //     pointHoverBorderColor: chartColor,
      //     pointBorderWidth: 1,
      //     pointHoverRadius: 7,
      //     pointHoverBorderWidth: 2,
      //     pointRadius: 5,
      //     fill: true,
      //     backgroundColor: gradientFill,
      //     borderWidth: 2,
      //     data: [  190, 95, 50, 150, 100,80, 130, 90, 150, 160, 120, 140 ]
      // }
    ]
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: '#fff',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    legend: {
      position: "bottom",
      fillStyle: "white",
      display: true,
      labels: {
                      fontColor: 'white'
                  }          
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "rgba(255,255,255,0.4)",
          fontStyle: "bold",
          beginAtZero: true,
          maxTicksLimit: 5,
          padding: 10
        },
        gridLines: {
          drawTicks: true,
          drawBorder: false,
          display: true,
          color: "rgba(255,255,255,0.1)",
          zeroLineColor: "transparent"
        }

      }],
      xAxes: [{
        gridLines: {
          color: "rgba(255,255,255,0.1)",
          zeroLineColor: "transparent",
          display: false,

        },
        ticks: {
          padding: 10,
          fontColor: "rgba(255,255,255,0.4)",
          fontStyle: "bold"
        }
      }]
    }
  }
};

toggleChartType: function () {
  // Destroy the existing chart
  this.myChart.destroy();

  // Set the chart type
  this.chartType = (this.chartType === 'line') ? 'bar' : 'line';

  // Init the chart
  this.initDashboardPageCharts();
};