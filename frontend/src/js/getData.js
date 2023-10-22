import Chart from 'chart.js/auto'

export async function getData (url, type, options, labelInfo, actualCat) {
    let cat;
    if (type == 'scatter' || document.getElementById('selectCat') == null)
        cat = '';
    else
        cat = document.getElementById('selectCat').value;
    const reponse = await fetch(url + cat);
    let chart = document.getElementById(type + 'Chart');
    let info = document.getElementById(type + 'Info');
    if (reponse.ok === true) {
        const r = reponse.json();
        r.then(rep => {
            if (rep.length === 2){
                info.style.display = 'none';
                let chartFigure = Chart.getChart(chart);
                if (chartFigure === undefined)
                    new Chart(chart, {
                        type: type,
                        data:{
                            labels: rep[0],
                            datasets: rep[1]
                        },
                        options: options
                    });
                else{                    
                    chartFigure.data = {
                        labels: rep[0],
                        datasets: rep[1]
                    };
                    chartFigure.update('none');
                }                    
                chart.style.display = 'inline-block';
            }
            else{
                chart.style.display = 'none';
                info.style.display = 'inline-block';
                info.innerHTML = 
                "<p>" + labelInfo + "</p>" +
                "<h3>" + rep[0] + "</h3>";
            }
        });
    }
    else{
        chart.style.display = 'none';
        info.style.display = 'inline-block';
        info.innerHTML =
        "<h3>" + reponse.status + "</h3>" +
        "<p>" + reponse.statusText + "</p>";
    }
}

export const URL = "http://localhost:3000/";
export const MAX_EVOLUTION = 5;
export const MAX_PARTICIPATION = 100;