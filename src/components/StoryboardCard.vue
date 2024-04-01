<template>
    <div class="storyboard-card">
      <el-popover
        ref="popover"
        trigger="hover"
        :width="650"
        popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px;">
        <template #reference>
          <div style="cursor: pointer;">
            <img :src="requireImg(scene.img)" alt="Scene image" style="width: 300px; object-fit: cover;">
          </div>
        </template>
        <img :src="requireImg(scene.img)" alt="Scene image" style="width: 100%; max-width: 650px; max-height: 700px;">
      </el-popover>
      <div style="margin-top: 20px;">
        {{ scene.description }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      scene: Object
    },
    methods: {
      requireImg(imgPath) {
        return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
      },
    }
  };
  </script>
  
  <style scoped>
 .storyboard-card {
  float: left;
  padding: 10px;
  margin-right: 15px;
  margin-bottom: 15px;
  width: 300px; /* 或根据实际需要调整宽度 */
  border: 1px solid #ccc; /* 添加边框 */
  box-shadow: 0 2px 8px rgba(0,0,0,0.1); /* 可选：添加轻微的阴影效果 */
  border-radius: 4px; /* 可选：添加圆角 */
}

.storyboard-card::after {
  content: "";
  display: table;
  clear: both;
}
  </style>
