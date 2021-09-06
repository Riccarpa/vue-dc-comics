<template>
  <div id="app">
   <Header/>
   <Content/>
   <Buy/>
   <Footer/>
   <Sign/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
import Buy from '@/components/Buy-Section.vue';
import Footer from '@/components/Footer.vue';
import Sign from '@/components/Sign-in.vue';

export default {
  name: 'App',
  components: {
   Header,
   Content,
   Buy,
   Footer,
   Sign,
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/_generics.scss';
  #app{
    height: 100vh;
  }

</style>
