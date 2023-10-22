<template>
    <div class="chart">
        <canvas id="lineChart"></canvas>
        <div class="block" id="lineInfo"></div>
    </div>
</template>

<script>
    const Data = require('../../js/getData');

    const request = 'performance/';
    const type = 'line';
    const label = 'Taux de participation moyen';
    var options = {
                    scales: {
                        y: {
                            min: 0,
                            max: Data.MAX_EVOLUTION,
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Evolution sportive moyenne'
                        }
                    }
                };
    var actualCat = '';

    export default {
        name: 'LinePerf',
        async mounted(){
            actualCat = await Data.getData(Data.URL + request, type, options, label, actualCat);
        }
    }
    setInterval(async function addData(){
        actualCat = await Data.getData(Data.URL + request, type, options, label, actualCat);
    }, 1000);
</script>