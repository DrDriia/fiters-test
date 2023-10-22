<template>
    <div class="chart">
        <canvas id="barChart"></canvas>
        <div class="block" id="barInfo"></div>
    </div>
</template>

<script>
    const Data = require('../../js/getData');

    const request = Data.PARTICIPATE;
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

    export default {
        name: 'BarParticipate',
        async mounted(){
            await Data.getData(Data.URL + request, type, options, label);
        }
    }
    setInterval(async function addData(){
        await Data.getData(Data.URL + request, type, options, label);
    }, 1000);
</script>