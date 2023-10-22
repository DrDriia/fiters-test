<template>
  <div class="block">
    <div id="center-info">
      <div>
        <h3>Tableau de bord</h3>
        <p>Récapitulatif du taux de participation et de l'évolution sportive mensuelle de chaque employé.</p>
      </div>
      <select id="selectCat">
        <option value="">Trier par...</option>
        <option value="genre">Genre</option>
        <option value="categorie_socio_professionnelle">Catégorie socio-professionnelle</option>
        <option value="id">Individu</option>
      </select>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Info'
}
</script>

<style>
.block{
  margin-top:30px;
  width:50%;
  display:inline-block;
  text-align:center;
  padding:10px;
  border-radius:5px;
  background-color:#36A2EB;
  color:#FFFFFF;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight:500;
  font-size:100%;
  box-shadow:0px 2px 5px #00000088;
}

#selectCat {
  width: 80%;
  padding: 10px;
  font-size: 80%;
  border: 1px solid #CCCCCC;
  border-radius: 5px;
  background-color: #FFFFFF;
  color: #333333;
  margin-top:10px;
  cursor: pointer;
}

#selectCat:hover {
  background-color: #FFFFFFEE;
}

#offline{
  margin:0;
  margin-top:10px;
  font-weight:350;
  color:#FFFFFFBB;
}
</style>
