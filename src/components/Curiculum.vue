<template>
  <div class="main">
    <div class="cv-container" shadow="">
      <div class="nom-et-photo">
        <div class="nom-et-description">
          <h3>Alexis Mérienne<br></h3>
          <h5>Etudiant en Master 1 d'informatique</h5>
        </div>
        <img class="my-profile-img" src="../../assets/photo-profil-cv.jpg" width="130" height="144">
      </div>
      <div class="activity" style="margin-top : 20px">
      </div>
    </div>
    <div class="my-button" shadow-little="">
      <a href="https://www.linkedin.com/in/alexis-m%C3%A9rienne-442948199/" style="color: #1c8c00;text-decoration: none">
        <h5>Linkedin</h5>
      </a>
    </div>
    <div class="my-button" shadow-little="">
      <a href="https://github.com/AlexisMerienne" style="color: #1c8c00;text-decoration: none">
        <h5>Github</h5>
      </a>
    </div>
     <div class="my-button" shadow-little="">
      <a href="https://www.facebook.com/alexis.Req1" style="color: #1c8c00;text-decoration: none">
        <h5>Facebook</h5>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Curiculum',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  width: 100%;
  height: 100%;
}
h5 {
  margin-bottom: 0px;
}
.main{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.cv-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color:white;
  margin-top : 70px ;
  width: 35%;
  min-width: 300px;
  text-align: left;
}
.nom-et-photo{
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
}
.nom-et-description{
  display: flex;
  flex-direction: column;
}
.my-profile-img{
  border-radius: 7px;
}
.my-button{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  width: 35%;
  min-width: 250px;
  min-height: 40px;
  border:solid;
  border-color: #7aeb7a;
  border-radius : 14px;
  cursor: pointer;
}
.my-button:hover{
  background-color : #bfebbf;
}
</style>
