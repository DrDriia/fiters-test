<template>
    <canvas id="chartPerfPart"></canvas>
</template>
  
<script>
    import Chart from 'chart.js/auto';
    const Data = require('../js/getData');

    export default {
        name: 'ScatterPerfPart',
        async mounted(){
            var request = "perfpart/";

            Data.getData(Data.URL + request)
            .then(reponse => {
                const ctx = document.getElementById('chartPerfPart');

                new Chart(ctx, {
                    type: 'scatter',
                    data:{
                        labels: reponse[0],
                        datasets: reponse[1]
                    }
                });
            });
        }
    }
</script>