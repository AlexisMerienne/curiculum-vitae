<template>
  <div class="app" id="app">
    <div v-if="!isMobile()" class="header">
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
          <b-button id="button-consommation" variant="outline-dark" v-on:click='goToEtudes()'>
           Études
        </b-button>
        <div class="before-img" style="height:100%;width:10px"/>
        <b-button id="button-batiment" variant="outline-dark" v-on:click='goToCompetences()'>
            Compétences principales
        </b-button>
    </div>
    <div v-else class="header">
        <div class="container-title" >
            <div class="before-img" style="height:60px;width:20px"/>
            <div v-b-toggle.sidebar-1 class="navbar-logo">
                <img src="../assets/icons/list.svg" height="50px" width="50px" style="border-radius:7px"/>
            </div>
        </div>
        <b-sidebar id="sidebar-1" title="Menu" width="200px" shadow>
          <div class="px-3 py-2" style="text-align:left;">
            <div class="side-home" v-on:click="goToHomePage()">
              <h6>Home</h6>
            </div>
            <hr>
            <div class="side-exp-pro" v-on:click="goToExperiencePro()">
              <h6>Expérience professionnelles</h6>
            </div>
            <hr>
            <div class="side-etudes" v-on:click="goToExperiencePro()">
              <h6>Études</h6>
            </div>
            <hr>
            <div class="side-comp" v-on:click="goToExperiencePro()">
              <h6>Compétences principales</h6>
            </div>
          </div>
        </b-sidebar>
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
    },
    goToEtudes(){
      this.$router.push({path : 'etudes'})
    },
    goToCompetences(){
        this.$router.push({path : 'competences'})
    },
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
      return false
      }
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:rgb(37, 37, 37)')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  }
}
</script>

<style>
  body{
    background-color: rgb(37, 37, 37) ;
  }
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
  .side-home{
    cursor: pointer;
  }
  .side-exp-pro{
    cursor: pointer;
  }
  .side-etudes{
    cursor: pointer;
  }
  .side-comp{
    cursor: pointer;
  }
</style>
