<template>
  <div v-if="visible" class="tooltip" :style="{ left: x + 'px', top: y + 'px' }">
    <img v-if="textdata.img" :src="requireImg(textdata.img)" alt="Tooltip Image" class="tooltip-image">
    <p>· {{ textdata.text1 }}</p>
    <p v-if="textdata.text2">· {{ textdata.text2 }}</p>
    <p v-if="textdata.text3">· {{ textdata.text3 }}</p>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    x: Number,
    y: Number,
    textdata: Object,
    image: String
  },
  methods: {
    requireImg(imgPath) {
      return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
    },
    // ...你的其他方法...
  },
}
</script>

<style>
.tooltip {
  position: absolute;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  z-index: 100;
  max-width: 300px;
}

.tooltip-image {
  width: 100%;
  margin-bottom: 10px;
}

p {
  color: #333;
  font-size: 16px;
}
</style>