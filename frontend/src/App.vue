<template>
  <div>
    Hello ?
    <select id="selectCat">
      <option value="">Global</option>
      <option value="genre">Genre</option>
      <option value="categorie_socio_professionnelle">Poste</option>
      <option value="id">Individuel</option>
    </select>
    <PieChart />
    <BarParticipate />
    <LinePerf />
    <ScatterPerfPart />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PieChart from './components/PieCategory.vue'
import BarParticipate from './components/BarParticipate.vue'
import LinePerf from './components/LinePerf.vue'
import ScatterPerfPart from './components/ScatterPerfPart.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, PieChart, BarParticipate, LinePerf, ScatterPerfPart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display:flex
}
</style>
