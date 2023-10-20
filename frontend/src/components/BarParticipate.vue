<template>
    <canvas id="chartParticipate"></canvas>
</template>
  
<script>
    import Chart from 'chart.js/auto'
    const Data = require('../js/getData');

    var chart;
    const request = "participate/";

    export default {
        name: 'BarParticipate',
        async mounted(){
            let cat = "genre";

            Data.getData(Data.URL + request + cat)
            .then(reponse => {
                chart = new Chart(
                    document.getElementById('chartParticipate'), {
                    type: 'bar',
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
            console.log("BAR");
            console.log(e);
        }

        }, 2000);
</script>