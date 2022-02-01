<template>
  <div class="app" id="app">
    <div class="header">
        <div class="container-title" >
          <div class="before-img" style="height:60px;width:20px"/>
          <div class="navbar-logo" v-on:click="goToHomePage()">
              <img src="../public/logo.svg" height="50px" width="50px" style="border-radius:7px"/>
          </div>
        </div>
        <div class="before-img" style="height:100%;width:20px"/>
        <b-button id='button-homepage' variant="outline-dark" v-on:click='goToExperiencePro()'>
          Expérience professionnelles
        </b-button>
          <div class="before-img" style="height:100%;width:10px"/>
          <b-button id="button-consommation" variant="outline-dark" v-on:click='goToTerritoireConso()'>
           Études
        </b-button>
        <div class="before-img" style="height:100%;width:10px"/>
        <b-button id="button-batiment" variant="outline-dark" v-on:click='goToBatiment()'>
            Compétences principales
        </b-button>
    </div>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  methods : {
    goToExperiencePro(){
      this.$router.push({path : 'experiencepro'});
    },
    goToHomePage(){
      this.$router.push({path : 'home'})
    }
  }
}
</script>

<style>
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
  .header {
    background-color: #1c8c00;
    font-family:  'DM Sans', sans-serif;
    font-size: 20px;
    overflow: hidden;
    display : flex;
    align-items: center;
    min-height : 60px;
    width : 100%;
    position : fixed;
    z-index : 99;
  }
  .container-title{
    display:flex;
    flex-direction:row;
    min-height : 35px;
  }
  .navbar-logo{
    margin : 5px;
    cursor: pointer;
  }
</style>
