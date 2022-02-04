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
        <div id='flip-card-2' class="flip-card">
            <div id='flip-card-container-2' class="flip-card-container">
                <div class="front-card-container" v-on:click="rotate2()">
                    <h5>Mes compétences pratiques</h5>
                </div>
                <div id="back-container" class="back-container" v-on:click="rotateback2()">
                    <h6>&#x25CF;<strong>Science des données</strong><ul/></h6>
                    <p>introduction à l’IA, Machine Learning, valorisation des données.<br></p>
                    <h6>&#x25CF;<strong>Software</strong><ul/></h6>
                    <p>architecture logicielle, Conception logicielle, IHM</p>
                </div>
            </div>
        </div>
        <div id='flip-card-3' class="flip-card">
            <div id='flip-card-container-3' class="flip-card-container">
                <div class="front-card-container" v-on:click="rotate3()">
                    <h5>Langues</h5>
                </div>
                <div id="back-container" class="back-container" v-on:click="rotateback3()">
                    <p>
                        - Anglais - Niveau C1 (TOEIC : 955/990)<br>
                        - Allemand - Niveau B1<br>
                        - Italien - Niveau A2<br>
                    </p>
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
        document.getElementById('flip-card-container').style.transform = "rotateY(180deg)";     
    },
    rotateback(){
        document.getElementById('flip-card').style.transform = "rotateY(0deg)";
        document.getElementById('flip-card-container').style.transform = "rotateY(0deg)";
    },
    rotate2() {
        document.getElementById('flip-card-container-2').style.transform = "rotateY(180deg)";     
    },
    rotateback2(){
        document.getElementById('flip-card-2').style.transform = "rotateY(0deg)";
        document.getElementById('flip-card-container-2').style.transform = "rotateY(0deg)";
    },
    rotate3() {
        document.getElementById('flip-card-container-3').style.transform = "rotateY(180deg)";     
    },
    rotateback3(){
        document.getElementById('flip-card-3').style.transform = "rotateY(0deg)";
        document.getElementById('flip-card-container-3').style.transform = "rotateY(0deg)";
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

.flip-card-2{
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
.flip-card-container-2{
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card-2:hover {
  cursor: pointer;
}
.flip-card-3{
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
.flip-card-container-3{
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card-3:hover {
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
