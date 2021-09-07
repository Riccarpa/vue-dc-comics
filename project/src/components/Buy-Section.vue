<template>
  <section>
    <div class="container">
      <div class="merch">
        <img  src="@/assets/img/buy-comics-digital-comics.png" alt="" />
        <span >digital comics</span>
      </div>
      <div class="merch">
        <img src="@/assets/img/buy-comics-merchandise.png" alt="" />
        <span>dc merchandise</span>
      </div>
      <div class="merch">
        <img src="@/assets/img/buy-comics-shop-locator.png" alt="" />
        <span>subscription</span>
      </div>
      <div class="merch">
        <img src="@/assets/img/buy-comics-subscriptions.png" alt="" />
        <span>comic shop locator</span>
      </div>
      <div class="merch">
        <img src="@/assets/img/buy-comics-digital-comics.png" alt="" />
        <span>dc power visa</span>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  name: "buy",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_generics.scss";

section {
  background-color: $primary-color;
  height: 20%;
}
.container {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  
}
.merch{
    height: 40%;
    display: flex;
    align-items: center;
    flex-basis: 20%;
    cursor: pointer;
}

.merch span{
    color: white;
    text-transform: uppercase;
    font-size: small;
    margin-left: 10px;
}
</style>
