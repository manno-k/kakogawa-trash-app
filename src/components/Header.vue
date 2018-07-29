<template>
  <header class="navbar-light bg-light py-2 flex-wrap">
    <div class="fontsize">
      <button class="btn btn-outline-info" @click="fontSize -= 1">
        小
      </button>
      <button class="btn btn-outline-info" @click="fontSize += 1">
        大
      </button>
    </div>
    <nav class="container">
      <div class="nav-left">
        <h1><img src="@/assets/logo.png" alt="加古川ゴミ分別アプリ"></h1>
        <h2 class="text-secondary">加古川市ゴミ分別アプリ</h2>
      </div>
      <!--<ul class="nav-right m-0 p-0">-->
      <!--<li>-->
      <!--<router-link to="/">日本語</router-link>-->
      <!--</li>-->
      <!--<li>-->
      <!--<router-link to="/cn">中国語</router-link>-->
      <!--</li>-->
      <!--</ul>-->
    </nav>
  </header>
</template>
<script>

export default {
  name: 'App',
  data () {
    return {
      fontSize: 10,
    }
  }, watch: {
    fontSize: function (v) {
      document.querySelector("body").style.fontSize = `${v * 2}px`
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~bootstrap/scss/bootstrap";

  .fontsize{
    position: relative;
    width: 100%;
    text-align: right;
    @include media-breakpoint-up(sm) {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  header {
    display: flex;
    justify-content: space-around;
    h2 {
      font-size: 1.5rem;
    }
    ul {
      align-self: flex-end;
      li {
        list-style: none;
        display: inline-block;
      }
    }
  }
</style>
