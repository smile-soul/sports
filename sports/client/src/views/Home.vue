<template>
  <div class="home-view">
    <navbar></navbar>
    <leftbar></leftbar>
    <div class="home-content">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import Navbar from '../components/Header'
import Leftbar from '../components/Leftbar'

export default{
  name: 'home-view',
  components: { Navbar, Leftbar },
}
</script>


<style lang="scss">
.home-view {
  height: 100%;
  background-color: #313131;
}
.home-view .home-content {
  margin: 0 20px 0 220px;
}
</style>
