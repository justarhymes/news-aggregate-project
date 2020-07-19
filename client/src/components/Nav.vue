<template>
  <el-container class="header">
    <h1 class="title">Newsfeed</h1>
    <el-menu mode="horizontal" :router="true" :default-active="$route.path">
      <el-menu-item index="/">
        Top Headlines
      </el-menu-item>
      <el-menu-item index="/saved">
        Saved Headlines
      </el-menu-item>
    </el-menu>
  </el-container>
</template>

<style lang="scss" scoped>
.header {
  background: #fff;
  border-bottom: solid 1px #e6e6e6;
  align-items: center;
  padding: 0 40px;
}
.title {
  line-height: 1;
  margin-bottom: 0;
  margin-right: 1.25rem;
}
.el-menu--horizontal {
  width: 100%;
  border-bottom: 0;
}
</style>
