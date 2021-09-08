<template>
  <header>
      <div class="container">
          <figure>
              <img class="pointer" src="@/assets/img/dc-logo.png" alt="">
          </figure>
          <ul>
              <li class="pointer" :class="{selected:link.current}" v-for="(link,index) in links" :key="index">
                  <a :class="{selected2:link.current}" class="bold uppercase" :href="link.url">{{link.text}}</a>
              </li>
              
          </ul>
      </div>
  </header>
</template>

<script>
export default {
name:'Header',
props:["links"]
}
</script>

<style lang="scss" scoped>


@import '@/assets/scss/_generics.scss';

header{
    height: 80px;
}

.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
figure{
    height: 80%;
}
 ul{
    display: flex;
    height: 100%;
 
     li {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 20px;
    
    } 
    & li:hover{
        border-bottom: 5px solid $primary-color;
        
    }
    li:hover a {
        color: blue;
    }
    
}




</style>