<template>
  <section class="container">
    <h1>Project Analysis - Quadrant</h1>

    <div class="columns">
      <div class="column">
        <Sliders @sliderEmit="readSliderData($event)"></Sliders>
      </div>
      <div class="column">
        <h3>Project Quadrant</h3>
        <bubble-chart :chart-data="datacollection"></bubble-chart>
      </div>
    </div>
    <!-- 
    <div class="columns">
      <div class="column">
        <h3>Bar Chart</h3>
        <bar-chart></bar-chart>
      </div>
      <div class="column">
        <h3>Reactivity - Live update upon change in datasets</h3>
        <reactive :chart-data="datacollection"></reactive>
        <button class="button is-primary" @click="fillData()">Randomize</button>
      </div>
    </div>
    -->
  </section>
</template>

<script>
import BubbleChart from "@/components/BubbleChart";
import Sliders from "@/components/Sliders";

export default {
  name: "VueChartJS",
  components: {
    BubbleChart,
    Sliders
  },
  data() {
    return {
      // instantiating datacollection with null
      datacollection: null,
      sliderData: {
        x: 0,
        y: 0
      },
      x: 0,
      y: 0
    };
  },
  created() {
    //anytime the vue instance is created, call the fillData() function.
    this.fillBubbleData();
  },
  methods: {
    readSliderData(data) {
      //alert(`Received slider emit: ${JSON.stringify(data)}`);
      this.sliderData = data;
      this.fillBubbleData();
    },
    //TODO: I feel like this should ALL be in BubbleData.vue
    fillBubbleData() {
      this.datacollection = {
        //Data to be represented on x-axis
        labels: ["Data"],
        datasets: [
          {
            label: "Project Name",
            backgroundColor: "#f87979",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            //Data to be represented on y-axis
            data: [
              {
                x: (this.x += this.sliderData.x),
                y: (this.y += this.sliderData.y),
                r: 15
              }
            ]
          }
        ]
      };
    }
  }
};
</script>