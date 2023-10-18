<template>
    <canvas id="myChart"></canvas>
</template>
  
<script>
    import Chart from 'chart.js/auto'

    export default {
        name: 'PieChart',
        async mounted(){
            console.log('Mounted');

            const reponse = await fetch("http://localhost:8080/employe");
            var json = await reponse.json();

            console.log(json);

            const ctx = document.getElementById('myChart');

            const myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                    }]
                }
            });
        }
    }
</script>