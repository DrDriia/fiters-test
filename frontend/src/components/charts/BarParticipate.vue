<template>
    <div class="chart">
        <canvas id="barChart"></canvas>
        <div class="block" id="barInfo"></div>
    </div>
</template>

<script>
    const Data = require('../../js/getData');

    const request = 'participate/';
    const type = 'bar';
    const label = 'Taux de participation moyen';
    var options = { 
                    scales: {
                        y: {
                            min: 0,
                            max: Data.MAX_PARTICIPATION,
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: label
                        }
                    }};
    var actualCat = '';

    export default {
        name: 'BarParticipate',
        async mounted(){
            actualCat = await Data.getData(Data.URL + request, type, options, label, actualCat);
        }
    }
    setInterval(async function addData(){
        actualCat = await Data.getData(Data.URL + request, type, options, label, actualCat);
    }, 1000);
</script>

<style scoped>
    .block{
        width:80%;
    }
</style>