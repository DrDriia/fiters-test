<template>
    <canvas id="chartCategory"></canvas>
</template>

<script>
    import Chart from 'chart.js/auto'
    const Data = require('../js/getData');

    export default {
        name: 'PieChart',
        async mounted(){
            var request = "employe/";
            var cat = "categorie_socio_professionnelle";

            Data.getData(Data.URL + request+ cat)
            .then(reponse => {
                const ctx = document.getElementById('chartCategory');

                var datas = [];

                for (var i = 1;i<reponse.length;++i)
                    datas.push({data:reponse[i]});

                new Chart(ctx, {
                    type: 'pie',
                    data:{
                        labels: reponse[0],
                        datasets: datas
                    }
                });
            });
        }
        //myLineChart.data.datasets[0].data[2] = 50;
        //myLineChart.update();
    }
</script>