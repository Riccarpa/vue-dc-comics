<template>
  <div class="card">
      <img :src="book.thumb" alt="">
      <h3>{{book.series}}</h3>
  </div>
</template>

<script>
export default {
name:'ContentCard',
props:["book"]
}
</script>

<style lang="scss" scoped>
.card{
    flex-basis: calc(100% / 6);
    color: white;
    height: 200px;
    
    
    img{
        width: 150px;
        height: 150px;
    }
    h3{
        margin-top: 0.5rem;
        text-transform: uppercase;
        font-size: smaller;
        width: 90%;
    }
}
</style>