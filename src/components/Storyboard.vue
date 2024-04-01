<template>
  <div>
    <h2>Activity Storyboards</h2>
    <div class="storyboards-flex-container">
      <StoryboardCard
        v-for="(scene, index) in activityScenes"
        :key="'activity-' + index"
        :scene="scene"
      />
    </div>

    <h2>Prototype Storyboards</h2>
    <div class="storyboards-flex-container">
      <StoryboardCard
        v-for="(scene, index) in prototypeScenes"
        :key="'prototype-' + index"
        :scene="scene"
      />
    </div>
  </div>
</template>

<script>
import StoryboardCard from '@/components/StoryboardCard.vue';
import storyboarddata from '@/json/storyboard.json';


export default {
  components: {
    StoryboardCard
  },
  data() {
    return {
      // 初始化空数组
      activityScenes: [],
      prototypeScenes: [],
      storyboarddata: storyboarddata
    };
  },
  mounted() {
    this.loadScenes();
  },
  methods: {
    loadScenes() {


      // 直接从data加载到组件的data属性中
      this.activityScenes = storyboarddata.activity;
      this.prototypeScenes = storyboarddata.prototype;
    }
  }
};

</script>

<style>
.storyboards-flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 控制卡片之间的间隔 */
}
</style>