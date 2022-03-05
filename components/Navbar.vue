<template>
  <div>  
    <input type="checkbox" id="nav-check">
    <div class="navigation">
      <img src="../assets/images/logo-dark.svg" alt="">
      <nav class="navigation__nav">
        <div class="nav-btn">
          <label for="nav-check" id="nav-icon4">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <ul>
          <li><nuxt-link to="#">About Us</nuxt-link></li>
          <li><nuxt-link to="#">Offer</nuxt-link></li>
          <li><button>Get In Touch</button></li>
        </ul>
      </nav>
    </div>
    <div class="home__header__dropdown">
      <!-- <img src="../assets/images/logo-light.svg" alt=""> -->
        <div class="content">
          <ul>
            <li><nuxt-link to="#">About Us</nuxt-link></li>
            <li><nuxt-link to="#">Offer</nuxt-link></li>
            <li><button>Get In Touch</button></li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang='scss'>
.navigation {
  max-width: 1260px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  &__nav {
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      align-items: center;
      gap: 50px;
      @media screen and (max-width: 768px) {
        display: none;
      }
      li {
        a {
          text-decoration: none;
          color: #ffffff;
          font-size: 16px;
        }
        button {
          border: 1px solid #ffffff;
          background: #ffffff;
          border-radius: 40px;
          color: #5051DB;
          border: 1px solid #ffffff;
          padding: 10px 20px;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }
}
 #nav-check {
  display: none;
  &:not(:checked) ~ .home__header__dropdown {
    display: none;
  }
  &:checked ~ .home__header__dropdown {
    height: calc(100vh);
    display: block;
    overflow-y: auto;
    background: #5051DB;
    padding: 30px;
    text-align: center;
    li {
      margin-top: 20px;
      a {
        text-decoration: none;
        color: #ffffff;
        font-size: 16px;
      }
      button {
        border: 1px solid #ffffff;
        background: #ffffff;
        border-radius: 40px;
        color: #5051DB;
        border: 1px solid #ffffff;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
  &:checked ~ #nav-icon4 span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -3px;
    left: 8px;
  }

  #nav-icon4 span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  #nav-icon4 span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 39px;
    left: 8px;
  }
}
.nav-btn {
  display: none;
  @media screen and (max-width: 768px) {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
    padding: 20px;
    label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
      span {
        display: block;
        width: 25px;
        height: 10px;
        border-top: 2px solid #5051DB;
      }
    }
  }

}
</style>