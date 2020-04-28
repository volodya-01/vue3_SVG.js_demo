<template>
  <div class="SVG1">
    <div id="test1"></div>
  </div>
</template>

<script>
export default {
  name: "SVG1",
  mounted() {
    this.drawsvg1();
  },
  methods: {
    drawsvg1() {
      // 在main.js中引入SVG.js，并把SVG绑定在原型上
      // import { SVG } from "@svgdotjs/svg.js";
      // Vue.prototype.$SVG =SVG;
      var draw = this.$SVG()
        .addTo("#test1")
        .size(600, 600);
      var rect = draw.rect(300, 300).attr({
        fill: "red",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
