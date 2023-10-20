<template>
    <canvas id="chartPerf"></canvas>
</template>
  
<script>
    import Chart from 'chart.js/auto'
    const Data = require('../js/getData');

    var chart;
    const request = "performance/";

    export default {
        name: 'LinePerf',
        async mounted(){
            var cat = document.getElementById('selectCat').value;
            Data.getData(Data.URL + request + cat)
            .then(reponse => {
                chart = new Chart(
                    document.getElementById('chartPerf'), {
                    type: 'line',
                    data:{
                        labels: reponse[0],
                        datasets: reponse[1]
                    }
                });
            });
        }
    }

    setInterval(function addData() {
        try{
            let cat = document.getElementById('selectCat').value;
            Data.getData(Data.URL + request + cat)
                .then(reponse => {
                    chart.data = {
                        labels:reponse[0],
                        datasets:reponse[1]}
                });
            chart.update();
        }catch (e){
            console.log("LINE");
            console.log(e);
        }
        }, 2000);
</script>