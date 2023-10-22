const Papa = require("papaparse"),
    fs = require("fs");

class Csv{
    static getCsv(file){
        let csv = fs.readFileSync(file, "utf-8");
        let fileCSV = Papa.parse(csv, {encoding: "utf-8"});

        let meta = fileCSV.meta;
        let errors = fileCSV.errors; // Erreurs à gérer
        
        let datas = fileCSV.data;
        
        if (datas.length == 0)
            return [];

        let labels = [];
        datas[0].forEach((title) => {
            if (title != '')
                labels.push(title);
        });

        let data = [];
        for (var i = 1;i<datas.length;++i){
            var newValue = {};
            if (datas[i][0] == "") continue;
            for (var j = 0;j<labels.length;++j) newValue[labels[j]] = datas[i][j];
            data.push(newValue);
        }
        return data;
    }
}

module.exports = Csv