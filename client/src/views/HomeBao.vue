<template>
  <div class="home-view">
    <navbar></navbar>
    <LeftbarBao></LeftbarBao>
    <div class="home-content" :class="{ wide: !$store.state.leftbar.wide }">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import Navbar from '../components/Header'
import LeftbarBao from '../components/LeftbarBao'

export default{
  name: 'home-view',
  components: { Navbar, LeftbarBao },
}
</script>


<style lang="scss">
.home-view {
  height: 100%;
  .home-content {
    margin: 56px 20px 0 220px;
  }
  .home-content.wide {
    margin: 56px 20px 0 70px;
  }
}
</style>
