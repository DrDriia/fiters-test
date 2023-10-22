<template>
    <div class="chart">
        <canvas id="lineChart"></canvas>
        <div class="block" id="lineInfo"></div>
    </div>
</template>

<script>
    const Data = require('../../js/getData');

    const request = Data.PERFORMANCE;
    const type = 'line';
    const label = 'Evolution sportive moyenne';
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
                            text: label
                        }
                    }
                };

    export default {
        name: 'LinePerf',
        async mounted(){
            await Data.getData(Data.URL + request, type, options, label);
        }
    }
    setInterval(async function addData(){
        await Data.getData(Data.URL + request, type, options, label);
    }, 1000);
</script>