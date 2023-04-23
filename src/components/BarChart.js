

import React, { useRef, useEffect, useState } from 'react';
import Chart, { Ticks } from 'chart.js/auto';

const BarChart = ({ totalcost, rounded_co2 }) => {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    // Create chart only once
    if (totalcost > 0 && !chart) {
      // Define custom chart type
    
      Chart.register({
        id: 'bar',
        beforeDraw: (chart, args, options) => {
          // chart.options.scales.x.categoryPercentage = barThickness / 100;
        }
      });

      const ctx = chartRef.current.getContext('2d');
      const newChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Money Spent', 'CO2 Emitted(kg)','random'],
          datasets: [{
            data: [totalcost, rounded_co2,100],
            backgroundColor: ['#210047', '#210047','#210047']
          }]
        },
       
        options: {
          maintainAspectRatio: true, // Set to true to maintain aspect ratio
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                display: false
              }
            },
            y: {
              max: 600, // Change this value to increase/decrease the height of bars
              beginAtZero: true,
              grid: {
                display: false // Hide y-axis grid lines
              },
              ticks: {
                display: true,
                color: '#210047'
              }
            }
          },
          plugins: {
            legend: {
              display: false // Hide legend
            }
          },
              // Add animation options here
            animation: {
              duration: 1000, // Animation duration in milliseconds
              easing: 'easeOutQuart' // Animation easing function
            },
            // Add hover options here
            hover: {
              mode: 'nearest',
              intersect: true
            },

          barThickness: (context) => {
            const chartWidth = context.chart.width;
            const percentage = 0.25; // Set desired percentage here
            return Math.ceil(chartWidth * percentage);
          }
        }
    
      });

      setChart(newChart);
    }

    // Clean up chart on unmount
    return () => {
      if (chart) {
        chart.destroy();
        setChart(null);
      }
    };
  }, [totalcost, rounded_co2, chart]);

  return (
    <div className="myChart">
      <canvas className = 'bar--chart' ref={chartRef} style = {{width:200, height:200}} />
    </div>
  );
};

export default BarChart;











//my code
// import React, { useEffect, useState,useRef } from 'react';
// import { Chart } from 'chart.js/auto';

// const BarChart = (props) => {
//   const totalcost = props.totalcost
//   const rounded_co2 = props.rounded_co2

//   const chartRef = useRef(null);

//   let count = 0
//   if (totalcost > 0){
//       if (count < 2){
//         console.log(totalcost,rounded_co2)
//         Chart.register({
//           id: 'bar',
//           beforeDraw: (chart, args, options) => {
//             // Custom implementation for the 'bar' chart type
//           },
//         });
//         // Initialize the chart when the component mounts
//         const myChart = new Chart(chartRef.current, {
//           type: 'bar', // Use 'bar' as the chart type
//           data: {
//             labels: ['Money Spent', 'Co2 Emitted'],
//             datasets: [
//               {
//                 // Set the background color to a red gradient
//                 data: [totalcost,rounded_co2],
//               },
//             ],
//           },
//         options: {
//           maintainAspectRatio: false,
//           scales: {
//             x: {
//               // Remove grid lines and ticks on x-axis
//               grid: {
//                 display: false
//               },
//               ticks: {
//                 display: false
//               }
//             },
//             y: {
//               // Remove grid lines and ticks on y-axis
//               grid: {
//                 display: false
//               },
//               ticks: {
//                 display: false
//               }
//             }
//           },
//           // categoryPercentage: 0.8, // Set desired bar height percentage here
//           barThickness: (context) => {
//             const chartWidth = context.chart.width;
//             const percentage = 0.25; // Set desired percentage here
//             return Math.ceil(chartWidth * percentage);
//           }
//         }})
//         // Clean up the chart when the component unmounts

//         myChart.destroy();
//         count=count+1
//       }
//   }

//   return (
//     <div className="myChart">
//       <canvas className = 'bar--chart' ref={chartRef} />
//     </div>
//   );
// };

// export default BarChart;

