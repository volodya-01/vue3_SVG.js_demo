<template>
  <div class="home">
    <div><SVG1 /></div>
    <div><SVG2 /></div>
  </div>
</template>

<script>
// @ is an alias to /src
import SVG1 from "@/components/SVG1.vue";
import SVG2 from "@/components/SVG2.vue";

export default {
  name: "Home",
  components: {
    SVG1,
    SVG2
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 160px;
}
</style>
