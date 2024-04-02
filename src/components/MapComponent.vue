<template>
    <div v-if="visible" class="map-container">
      <img :src="map" alt="Store Map" />
      <button @click="hide">Close</button>
    </div>
  </template>
  
  <script>
import map from '@/assets/img/map.png';

  export default {
    data() {
      return {
        visible: false,
        map:map,
      };
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
        this.$emit('closed');
      },
    },
  };
  </script>
  
  <style scoped>
  .map-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    /* 样式根据您的具体需要调整 */
  }
  
  .map-container img {
    width: 100%;
    height: auto;
    /* 根据需要调整地图图像大小 */
  }
  
  .map-container button {
    /* 按钮样式 */
    cursor: pointer;
  }
  </style>
  