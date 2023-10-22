import Chart from 'chart.js/auto'

export async function getData (url, type, options, labelInfo) {
    let cat;
    if (type == 'scatter' || document.getElementById('selectCat') == null)
        cat = '';
    else
        cat = document.getElementById('selectCat').value;
    try{
        const reponse = await fetch(url + cat);
        let chart = document.getElementById(type + 'Chart');
        let info = document.getElementById(type + 'Info');
        if (reponse.ok === true) {
            const r = reponse.json();
            r.then(rep => {
                if (rep.length === 2){ // Cas où la requête se traite par graphique
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
                else{ // Cas où la requête se traite sans graphique
                    chart.style.display = 'none';
                    info.style.display = 'inline-block';
                    info.innerHTML = 
                    "<p>" + labelInfo + "</p>" +
                    "<h3>" + rep[0] + "</h3>";
                }
            });
        }
        else{ // Cas de code d'erreur renvoyé par le serveur
            chart.style.display = 'none';
            info.style.display = 'inline-block';
            info.innerHTML =
            "<h3>" + reponse.status + "</h3>" +
            "<p>" + reponse.statusText + "</p>";
        }
        if (document.getElementById('offline') !== null)
            document.getElementById('offline').remove();
    }
    catch(e){ // Cas où le serveur est hors-ligne
        if (document.getElementById('offline') === null){
            var offline = document.createElement('h6');
            offline.id = 'offline';
            offline.textContent = 'Serveur back-end hors-ligne...';
            document.getElementById('center-info').appendChild(offline);
        }
        
    }
    
}

export const URL = 'http://localhost:3000/';

export const PARTICIPATE = 'participate/';
export const PERFORMANCE = 'performance/';
export const CATEGORY = 'employe/';
export const PERFPART = 'perfpart/';

export const MAX_EVOLUTION = 5;
export const MAX_PARTICIPATION = 100;