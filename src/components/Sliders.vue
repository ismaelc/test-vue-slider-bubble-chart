<template>
  <div>
    <h3>Parameters</h3>
    <p>
      <span>Value/Impact to Organization</span>
      <!-- <vue-slider v-model="valueCost" :adsorb="true" :interval="20" :marks="true" /> -->
      <vue-slider ref="slider01" v-model="d.valueImpact" :data="d.choicesImpact" :marks="true" />
    </p>
    <p>
      <span>Duration</span>
      <vue-slider ref="slider02" v-model="d.valueDuration" :data="d.choicesDuration" :marks="true" />
    </p>
    <p>
      <span>Data Access</span>
      <vue-slider
        ref="slider03"
        v-model="d.valueDataAccess"
        :data="d.choicesDataAccess"
        :marks="true"
      />
    </p>
    <p>
      <span>Resource Access</span>
      <vue-slider
        ref="slider04"
        v-model="d.valueResourceAccess"
        :data="d.choicesResourceAccess"
        :marks="true"
      />
    </p>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  name: "Sliders",
  components: {
    VueSlider
  },
  data() {
    return {
      d: {
        choicesImpact: ["Low Impact", "Moderate", "High Impact"],
        idxImpact: 1, // This refers to the position of the choice. It does not control it..
        valueImpact: "Moderate", // This controls which option in the slide is selected

        choicesDuration: ["1yr", "5mos", "3mos", "1mo", "2wks"],
        idxDuration: 2,
        valueDuration: "3mos",

        choicesDataAccess: [
          "Hard to obtain",
          "Accessible via approval",
          "Readily-accessible"
        ],
        idxDataAccess: 1,
        valueDataAccess: "Accessible via approval",

        choicesResourceAccess: [
          "Hard to obtain",
          "Accessible via approval",
          "Readily-accessible"
        ],
        idxResourceAccess: 1,
        valueResourceAccess: "Accessible via approval"
      }
    };
  },
  watch: {
    // TODO: Figure out watch for nested objects
    "d.valueImpact": function() {
      let index = this.$refs.slider01.getIndex();
      //alert(`${index} - ${this.d.idxImpact}`);
      let y = 0;
      if (index > this.d.idxImpact)
        y = 0.2 * Math.abs(index - this.d.idxImpact);
      else y = -0.2 * Math.abs(index - this.d.idxImpact);
      this.d.idxImpact = index;
      this.emitData({
        x: 0,
        y: y,
        r: 0
      });
    },
    "d.valueDuration": function() {
      let index = this.$refs.slider02.getIndex();
      let y = 0;
      if (index > this.d.idxDuration)
        y = 0.2 * Math.abs(index - this.d.idxDuration);
      else y = -0.2 * Math.abs(index - this.d.idxDuration);
      this.d.idxDuration = index;
      this.emitData({
        x: 0,
        y: y,
        r: 0
      });
    },
    "d.valueDataAccess": function() {
      let index = this.$refs.slider03.getIndex();
      let x = 0;
      if (index > this.d.idxDataAccess)
        x = 0.2 * Math.abs(index - this.d.idxDataAccess);
      else x = -0.2 * Math.abs(index - this.d.idxDataAccess);
      this.d.idxDataAccess = index;
      this.emitData({
        x: x,
        y: 0,
        r: 0
      });
    },
    "d.valueResourceAccess": function() {
      let index = this.$refs.slider04.getIndex();
      let x = 0;
      if (index > this.d.idxResourceAccess)
        x = 0.2 * Math.abs(index - this.d.idxResourceAccess);
      else x = -0.2 * Math.abs(index - this.d.idxResourceAccess);
      this.d.idxResourceAccess = index;
      this.emitData({
        x: x,
        y: 0,
        r: 0
      });
    }
  },
  methods: {
    emitData: function(operation) {
      //this.$emit("sliderEmit", this.d);
      this.$emit("sliderEmit", operation);
    }
  }
};
</script>
<style scoped>
p {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>