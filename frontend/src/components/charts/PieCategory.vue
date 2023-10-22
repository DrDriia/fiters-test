<template>
    <div class="chart round">
        <canvas id="pieChart"></canvas>
        <div class="block" id="pieInfo"></div>
    </div>
</template>

<script>
    const Data = require('../../js/getData');

    const request = 'employe/';
    const type = 'pie';
    const label = "Nombre d'employés"
    var options = {};
    var actualCat = '';

    export default {
        name: 'PieChart',
        async mounted(){
            actualCat = await Data.getData(Data.URL + request, type, options, label, actualCat);
        }
    }
    setInterval(async function addData(){
        actualCat = await Data.getData(Data.URL + request, type, options, label, actualCat);
    }, 1000);
</script>