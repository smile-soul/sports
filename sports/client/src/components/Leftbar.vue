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
      <el-menu-item class="home" index="/">
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
          name: 'baseInfo',
          title: '基本信息',
          icon: 'settings',
          index: '/base_info',
        },
        {
          name: 'sportsRules',
          title: '比赛规则',
          icon: 'warning',
          index: '/sports_rules',
        },
        {
          name: 'sportsItems',
          title: '比赛项目',
          icon: 'view_list',
          index: '/sports_items',
        },
        {
          name: 'sportsArguments',
          title: '项目参数',
          icon: 'settings_input_component',
          index: '/sports_arguments',
        },
        {
          name: 'allocateNumber',
          title: '号码分配',
          icon: 'cast_connected',
          index: '/allocate_number',
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
    background-color: #20a0ff;
    box-shadow: 0 0 40px 2px #20a0ff;
  }
  .el-submenu .el-menu-item {
    padding-left: 45px !important;
  }
  .el-submenu .el-menu-item.is-active {
    color: #20a0ff;
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
      color: #20a0ff;
    }
  }
}
.el-popover[x-placement^=right] {
  margin-left: 0;
}
</style>
