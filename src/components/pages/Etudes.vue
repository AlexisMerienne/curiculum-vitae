<template>
  <div class="main" main="">
    <div class="etudes-container" shadow="">
          <h6>&#x25CF; 2019-2022 :  Ecole d’ingénieur spécialité  –  <strong>sciences de l’informatique</strong>Polytech Nice-Sophia<ul/>
          </h6>
          <p>
          - Formation basée sur des  <strong>projets de groupe</strong><br>
          - Programmation orientée objet, gestion de bases de données, développement web, développement, d’applications mobiles, architecture logicielle<br>
          </p>
          <h6>&#x25CF; 2017-2019  : <strong> Classe préparatoire</strong>  aux grandes écoles spécialité physique-chimie – Lycée Kléber</h6><ul/>
          <h6>&#x25CF; 2015-2017 : Lycée générale, obtention du <strong>S mention très bien</strong> </h6><ul/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Etudes',
  props: {
    msg: String
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
.etudes-container{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top:80px;
  width: 40%;
  min-width: 300px;
}

</style>
