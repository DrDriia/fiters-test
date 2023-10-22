<template>
    <div class="chart round">
        <canvas id="pieChart"></canvas>
        <div class="block" id="pieInfo"></div>
    </div>
</template>

<script>
    const Data = require('../../js/getData');

    const request = Data.CATEGORY;
    const type = 'pie';
    const label = "Nombre d'employés"
    var options = {};

    export default {
        name: 'PieChart',
        async mounted(){
            await Data.getData(Data.URL + request, type, options, label);
        }
    }
    setInterval(async function addData(){
        await Data.getData(Data.URL + request, type, options, label);
    }, 1000);
</script>