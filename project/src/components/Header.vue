<template>
  <header>
      <div class="container">
          <figure>
              <img class="pointer" src="@/assets/img/dc-logo.png" alt="">
          </figure>
          <ul>
              <li :class="{selected:link.current}" v-for="(link,index) in links" :key="index">
                  <a :href="link.url">{{link.text}}</a>
              </li>
              
          </ul>
      </div>
  </header>
</template>

<script>
export default {
name:'Header',
data(){
         return {
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

<style lang="scss" scoped>
header{
    margin-top: 10px;
}
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    
}
figure{
    height: 100%;
}
 ul{
    display: flex;
     li {
    height: 80px;
    display: flex;
    align-items: center;
     margin-right: 20px;
    } 
    & li:hover{
        border-bottom: 3px solid blue;
    }
    ul li a{
     color: black;
    
    }
}




</style>