<template>
    <div class="chart">
        <canvas id="scatterChart"></canvas>
        <div class="block" id="scatterInfo"></div>
    </div>
</template>

<script>
    const Data = require('../../js/getData');

    const request = 'perfpart/';
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
    var actualCat = '';

    export default {
        name: 'ScatterPerfPart',
        async mounted(){
            actualCat = await Data.getData(Data.URL + request, type, options, label, actualCat);
        }
    }
    setInterval(async function addData(){
        actualCat = await Data.getData(Data.URL + request, type, options, label, actualCat);
    }, 1000);
</script>