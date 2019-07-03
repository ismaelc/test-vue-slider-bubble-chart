<script>
//Importing Bubble class from the vue-chartjs wrapper
import { Bubble, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
//Exporting this so it can be used in other components
export default {
  extends: Bubble,
  mixins: [reactiveProp],
  data() {
    return {
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                //beginAtZero: true
                //stepSize: 0.2,
                //maxTicksLimit: 10
                max: 1,
                min: -1
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                //beginAtZero: true
                //stepSize: 0.2,
                //maxTicksLimit: 10
                max: 1,
                min: -1
              },
              gridLines: {
                display: true
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
      //lineAtIndex: [0]
    };
  },
  mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    //this.renderChart(this.datacollection, this.options);

    /* TODO: Can't get this red line to work
    // https://codepen.io/anon/pen/wLjNKL
    this.addPlugin({
      id: "verticalLinePlugin",
      getLinePosition: function(chart, pointIndex) {
        const meta = chart.getDatasetMeta(0); // first dataset is used to discover X coordinate of a point
        const data = meta.data;
        return data[pointIndex]._model.x;
      },
      renderVerticalLine: function(chartInstance, pointIndex) {
        const lineLeftOffset = this.getLinePosition(chartInstance, pointIndex);
        const scale = chartInstance.scales["y-axis-0"];
        const context = chartInstance.chart.ctx;

        // render vertical line
        context.beginPath();
        context.strokeStyle = "#ff0000";
        context.moveTo(lineLeftOffset, scale.top);
        context.lineTo(lineLeftOffset, scale.bottom);
        context.stroke();

        // write label
        context.fillStyle = "#ff0000";
        context.textAlign = "center";
        context.fillText(
          "MY TEXT",
          lineLeftOffset,
          (scale.bottom - scale.top) / 2 + scale.top
        );
      },

      afterDatasetsDraw: function(chart) {
        if (chart.config.lineAtIndex) {
          chart.config.lineAtIndex.forEach(pointIndex =>
            this.renderVerticalLine(chart, pointIndex)
          );
        }
      }
    });
    */

    this.renderChart(this.chartData, this.options);
  }
};
</script>