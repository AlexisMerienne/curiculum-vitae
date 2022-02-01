<template>
  <div class="main">
    <div class="ex-pro-container" shadow="">
          <h6>&#x25CF; Octobre 2021 - Janvier 2022 - <strong>Alter Alsace Energie</strong> - Stage -  					4 mois<ul/></h6>
          <p>
          - Chargé de développer une <strong>application web de suivi de consommation</strong><br>
          - travail en association<br>
          - travail en <strong>autonomie</strong><br>
          </p>
           <h6>&#x25CF; Juillet 2020 - <strong>SIDEL</strong> - Travail d’été - 1 mois</h6>
          <p>
            - développement d'<strong>applications mobiles pour localisation interne</strong><br>
            - <strong>recherche documentaire</strong><br>
            - travail en autonomie<br>
          </p>
          <h6>&#x25CF; Juillet 2021 - MATCH Bischeim - Travail d’été - 1 mois</h6>
          <p>
            - Employé au rayon fruits et légumes<br>
            - <strong>travail en équipe</strong><br>
            - relation client<br>
          </p>
          <h6>&#x25CF; Juillet 2018 - La coccinelle, <strong>maraîcher BIO</strong> - Ouvrier agricole - 1 mois</h6>
          <p>
            - Cueillette, désherbage, plantation<br>
            - Travail au sein d’une <strong>équipe</strong><br>
          </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperiencePro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.ex-pro-container{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top:80px;
  width: 40%;
  min-width: 300px;
}

</style>
