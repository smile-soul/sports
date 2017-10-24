<template>
  <div class="not-found">
    <p>404 - 页面不存在</p>
    <a href="/">返回首页</a>
  </div>
</template>


<script>
export default{
  name: 'NotFound',
}
</script>


<style lang="scss">
.not-found {
  text-align: center;
  overflow: hidden;
  p {
    font-size: 20px;
  }
}
</style>
