<template>
  <div id="app">
    <Header/>
    <transition appear>
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
  @import "https://fonts.googleapis.com/earlyaccess/mplus1p.css";

  #app {
    font-family: "Mplus 1p", -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .v-enter-active,
  .v-leave-active, .v-move {
    transition:2s;
  }
  .v-enter {
    /*position: absolute;*/
    top: 0;
    opacity: 0;
    transform: translateX(-500px);
  }
  .v-leave-to {
    position: absolute;
    opacity: 0;
    transform: translateX(500px);
  }
</style>
