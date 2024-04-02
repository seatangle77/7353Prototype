<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <el-container>
    <!-- 头部导航 -->
    <el-header>
      <el-menu mode="horizontal" class="header-menu">
        <el-menu-item index="1">
          <router-link to="/" class="nav-link">FrameWork</router-link>
        </el-menu-item>
      </el-menu>
    </el-header>

    <!-- 主体内容 -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-header {
  background-color: #f5f5f5;
  line-height: 60px;
}

.header-menu {
  background-color: #f5f5f5;
}

.header-menu .el-menu-item {
  border: none !important;
}

.nav-link {
  text-decoration: none; /* 去除下划线 */
  color: #fff; /* 设置字体颜色为白色 */
  font-family: 'Helvetica Neue', Arial, sans-serif; /* 设置字体 */
  font-size: 16px; /* 设置字体大小 */
}

.router-link-exact-active {
  color: #409EFF !important; /* Element Plus的默认蓝色主题色，用于标示当前活跃的路由链接 */
}

</style>

