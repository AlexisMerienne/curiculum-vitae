<template>
  <div class="main" main="">
        <div id='flip-card' class="flip-card">
            <div id='flip-card-container' class="flip-card-container">
                <div class="front-card-container" v-on:click="rotate()">
                    <h5>Mes compétences techniques</h5>
                </div>
                <div id="back-container" class="back-container" v-on:click="rotateback()">
                    <h6>&#x25CF;<strong>Programmation fonctionnelle</strong><ul/></h6>
                    <p>
                        - Java<br>
                        - Python<br>
                        - C,C ++<br>
                    </p>
                    <h6>&#x25CF;<strong>Web</strong><ul/></h6>
                    <p> VueJs,Angular</p>
                    <h6>&#x25CF;<strong>Application mobile</strong><ul/></h6>
                    <p>Android Studio</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Competences',
  props: {
    msg: String
  },
  methods : {
    rotate() {
    
        //document.getElementById('flip-card').style.transform = "rotateY(180deg)";
        document.getElementById('flip-card-container').style.transform = "rotateY(180deg)";
        
    },
    rotateback(){
        document.getElementById('flip-card').style.transform = "rotateY(0deg)";
        document.getElementById('flip-card-container').style.transform = "rotateY(0deg)";
    },
  }
}
</script>

<style scoped>

p {
  font-size: 14px;
}
.main{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.flip-card{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  min-width: 250px;
  height : 300px;
  margin: 10px;
  margin-top : 80px ;
  background-color: transparent;
  border-radius: 7px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}
.flip-card-container{
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover {
  cursor: pointer;
}

.front-card-container, .back-container {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
.front-card-container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}
.back-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  transform: rotateY(180deg);
}



</style>
