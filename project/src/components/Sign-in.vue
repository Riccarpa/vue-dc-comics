<template>
  <section>
      <div class="container">
        <div class="button">
          <a href="#"> SIGN-UP NOW!</a>
        </div>
        <div class="social">
            <ul>
                <h3>FOLLOW US</h3>
                <li><img src="@/assets/img/footer-facebook.png" alt=""></li>
                <li><img src="@/assets/img/footer-twitter.png" ></li>
                <li><img src="@/assets/img/footer-youtube.png"></li>
                <li><img src="@/assets/img/footer-pinterest.png"></li>
                <li><img src="@/assets/img/footer-periscope.png"></li>
            </ul>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "Sign",
};
</script>

<style lang="scss" scoped>

    @import '@/assets/scss/_generics.scss';

    section{
        background-color: #303030;
         height: calc(100% - 620px);
    }
    .container{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .button{
        padding: 10px;
        border:3px solid $primary-color;
        display: inline-block;
        a{
            text-decoration: none;
            color: white;
        }
    }
    ul{
        display: flex;
        align-items: center;
        *{
            margin-right: 15px;
        }
        h3{
        color: $primary-color;
        }
        
    }
    
</style>
