<template>
  <div class="SVG2">
    <div id="test2"></div>
  </div>
</template>

<script>
import { SVG } from "@svgdotjs/svg.js";
export default {
  name: 'SVG2',
   mounted() {
    this.drawsvg2();
  },
  methods: {
    drawsvg2() {
      //局部引入SVG.js  import { SVG } from "@svgdotjs/svg.js";
      var draw = SVG()
        .addTo("#test2")
        .size(600, 600);
      var rect = draw.rect(300, 300).attr({
        fill: "#f06",
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

a {
  color: #42b983;
}
</style>
