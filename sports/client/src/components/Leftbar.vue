<template>
  <div class="leftbar" :class="{ narrow: !$store.state.leftbar.wide }">
    <!-- 左侧导航菜单-展开 -->
    <el-menu
    v-if="$store.state.leftbar.wide"
    router
    unique-opened
    mode="vertical"
    theme="dark"
    :default-active="'/' + $route.path.split('/')[1]">
    <el-menu-item class="home" index="/" @click="">
      <i class="material-icons">home</i>首页
    </el-menu-item>
    <el-menu-item v-for="menu in menus" :index="menu.index" :key="menu.id">
      <i class="material-icons">{{ menu.icon }}</i>{{ menu.title }}
    </el-menu-item>
  </el-menu>
  <!-- 左侧导航菜单-收缩 -->
  <el-menu
  v-if="!$store.state.leftbar.wide"
  router
  unique-opened
  mode="vertical"
  theme="dark"
  :default-active="'/' + $route.path.split('/')[1]">
  <el-menu-item class="home" index="/">
    <i class="material-icons">home</i>
  </el-menu-item>
  <el-submenu v-for="menu in menus" :index="menu.index" :key="menu.id">
    <template slot="title">
      <el-popover placement="right-start" trigger="hover" :visible-arrow=false>
        <el-menu-item :index="menu.index" :key="menu.id">
          {{ menu.title }}
        </el-menu-item>
        <i class="material-icons" slot="reference">{{ menu.icon }}</i>
      </el-popover>
    </template>
  </el-submenu>
</el-menu>
</div>
</template>


<script>
export default {
  name: 'leftbar',
  data() {
    return {
      menus: [
        {
          name: 'emqx',
          title: '基本信息',
          icon: 'open_in_browser',
          index: '/base_info',
        },
        {
          name: 'news',
          title: '比赛规则',
          icon: 'public',
          index: '/rules',
        },
        {
          name: 'jobs',
          title: 'page_3',
          icon: 'business_center',
          index: '/jobs',
        },
        {
          name: 'users',
          title: 'page_4',
          icon: 'person',
          index: '/users',
        },
      ],
      openMenuElement: '',
    }
  },
}
</script>


<style lang="scss">
.leftbar {
  position: fixed;
  top: 56px;
  bottom: 0;
  width: 200px;
  z-index: 1000;
  overflow: auto;
  background-color: #222222;
  .material-icons {
    margin-right: 10px;
    line-height: 50px;
    float: left;
  }
  .el-menu--dark {
    background-color: transparent;
  }
  .el-menu--dark  .el-menu {
    background-color: transparent;
  }
  .el-menu--dark .el-menu-item,
  .el-menu--dark .el-submenu__title {
    height: 50px;
    line-height: 50px;
    color: #a8a8a8;
    border-bottom: 1px solid #282828;
  }
  .el-submenu__title, .el-menu-item {
    padding-left: 15px !important;
  }
  .el-submenu.is-active .el-submenu__title,
  .is-active  {
    color: #fff !important;
  }
  .el-submenu.is-active:before,
  .is-active:before {
    z-index: 1001;
    position: absolute;
    left: 0;
    height: 50px;
    width: 3px;
    content: "";
    background-color: #00ab6b;
    box-shadow: 0 0 40px 2px #00ab6b;
  }
  .el-submenu .el-menu-item {
    padding-left: 45px !important;
  }
  .el-submenu .el-menu-item.is-active {
    color: #00ab6b;
  }
}

/* narrow sidebar */
.leftbar.narrow {
  width: 50px;
  .material-icons{
    width: 50px;
    text-align: center;
  }
  .el-submenu__title, .home {
    padding-left: 0 !important;
  }
  .el-icon-arrow-down {
    display: none;
  }
}
.el-popover {
  background: linear-gradient(top,rgba(33,32,44,0.9), rgba(34,34,34,1));
  border: none;
  .el-menu-item {
    color: #a8a8a8;
    height: 30px;
    line-height: 40px;
    padding-left: 20px !important;
    &:hover {
      background-color: transparent;
      color: rgba(#00ab6b, 0.6);
    }
  }
}
.el-popover[x-placement^=right] {
  margin-left: 0;
}
</style>
