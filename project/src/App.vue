<template>
  <div id="app">
   <Header :links="links"/>
   <Content />
   <Buy/>
   <Footer/>
   <Sign/>\
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
  },
  data(){
    return{
           links:[
        {
            text: 'Characters',
            url: '#',
            current: false,
        },
        {
            text: 'Comics',
            url: '#',
            current: true,
        },
        {
            text: 'Movies',
            url: '#',
            current: false,
        },
        {
            text: 'TV',
            url: '#',
            current: false,
        },
        {
            text: 'Games',
            url: '#',
            current: false,
        },
        {
            text: 'Collectibles',
            url: '#',
            current: false,
        },
        {
            text: 'Videos',
            url: '#',
            current: false,
        },
        {
            text: 'Fans',
            url: '#',
            current: false,
        },
        {
            text: 'News',
            url: '#',
            current: false,
        },
        {
            text: 'Shop',
            url: '#',
            current: false,
        },
        ],

    }
}
 
}
</script>

<style lang="scss">
  @import '@/assets/scss/_generics.scss';
  #app{
    height: 100vh;
  }

</style>
