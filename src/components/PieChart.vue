<template>
    <canvas id="myChart"></canvas>
</template>
  
<script>
    import Chart from 'chart.js/auto'

    export default {
        name: 'PieChart',
        mounted(){
            console.log('Mounted');

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