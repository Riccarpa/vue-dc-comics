<template>
  <footer>
      <section  >
          <div class="col">
              <ul>
                  <h3>DC COMICS</h3>
                  <li>Characters</li>
                  <li>Comics</li>
                  <li>Movies</li>
                  <li>TV</li>
                  <li>Games</li>
                  <li>Videos</li>
                  <li>News</li>
              </ul>
              <ul>
                  <h3>SHOP</h3>
                  <li>Shop DC</li>
                  <li>Shop DC Collectibles</li>
              </ul>
          </div>
          <div class="col">
              <ul>
                  <h3>DC</h3>
                  <li>Terms of use</li>
                  <li>Privacy and policy</li>
                  <li>Ad choices</li>
                  <li>Advertising</li>
                  <li>Jobs</li>
                  <li>Subscription</li>
                  <li>Talent Workshop</li>
                  <li>CPSC Certification</li>
                  <li>Ratings</li>
                  <li>Shop Help</li>
                  <li>Contact us</li>
              </ul>
          </div>
          <div class="col">
              <ul>
                  <h3>SITES</h3>
                  <li>DC</li>
                  <li>MAD magazine</li>
                  <li>DC Kids</li>
                  <li>DC universe</li>
                  <li>DC Power Visa</li>
              </ul>
          </div>

        </section>
      <img src="@/assets/img/dc-logo.png" alt="">
  </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style lang="scss" scoped>
    footer{
        height: 260px;
        background-image: url('../assets/img/footer-bg.jpg');
        display: flex;
        align-items: center;
        justify-content:space-around ;
        overflow: hidden;
       
        
    }
    img{
        opacity: 0.6;
        transform:rotate(-30deg);
        height: 400px;
    }
    section{
        display: flex;
        
        h3{
            color: white;
            margin-bottom: 10px;
        }
        ul{
            margin: 10px;
            font-size: smaller;
        }
        li{
            color: gray;
        }
    }
  
    
</style>