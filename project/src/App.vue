<template>
  <div id="app">
   <Header/>
   <Content/>
   <Buy/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
import Buy from '@/components/Buy-Section.vue';

export default {
  name: 'App',
  components: {
   Header,
   Content,
   Buy,
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/_generics.scss';

</style>
