<template>
    <div class="chart">
        <canvas id="scatterChart"></canvas>
        <div class="block" id="scatterInfo"></div>
    </div>
</template>

<script>
    const Data = require('../../js/getData');

    const request = Data.PERFPART;
    const type = 'scatter';
    const label = ''
    var options = {
                        scales: {
                            y: {
                                min: 0,
                                max: Data.MAX_EVOLUTION,
                            },
                            x: {
                                min: 0,
                                max: Data.MAX_PARTICIPATION,
                            }
                        }
                    };

    export default {
        name: 'ScatterPerfPart',
        async mounted(){
            await Data.getData(Data.URL + request, type, options, label);
        }
    }
    setInterval(async function addData(){
        await Data.getData(Data.URL + request, type, options, label);
    }, 1000);
</script>