<template>
  <div>
    <div id="firstElements">
      <div class="vertical-center">
        <Info />
        <PieChart />
      </div>
    </div>
    <ScatterPerfPart />
    <LinePerf />
    <BarParticipate />
  </div>
</template>

<script>
import Info from './components/Info.vue'
import PieChart from './components/charts/PieCategory.vue'
import BarParticipate from './components/charts/BarParticipate.vue'
import LinePerf from './components/charts/LinePerf.vue'
import ScatterPerfPart from './components/charts/ScatterPerfPart.vue'

export default {
  name: 'App',
  components: {
    Info, PieChart, BarParticipate, LinePerf, ScatterPerfPart
  }
}
</script>

<style>
#app div{
  text-align: center;
}

#firstElements{
  width:50%;
  display:inline-block;
  vertical-align: top;
  align-items:center;
  text-align:center;
}

.vertical-center{
  height:100%;
  width:100%;
  display:flex;
  align-items:center;
}

.chart{
  display:inline-block;
  width:40%;
  margin:10px;
  vertical-align: top;
}

@media (max-width: 850px) {
  .chart, #firstElements{
    width:90%;
  }

  .round{
    width:50%;
  }
}
</style>
