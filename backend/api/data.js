const Papa = require("papaparse"),
    fs = require("fs");

class Csv{
    constructor(file){
        let csv = fs.readFileSync(file, "utf-8");
        let fileCSV = Papa.parse(csv, {encoding: "utf-8"});

        this.meta = fileCSV.meta;
        this.errors = fileCSV.errors;
        
        let datas = fileCSV.data;

        let labels = [];
        datas[0].forEach((title) => (title != '') ? labels.push(title) : 0);

        this.data = [];
        for (var i = 1;i<datas.length;++i){
            var newValue = {};
            if (datas[i][0] == "") continue;
            for (var j = 0;j<labels.length;++j) newValue[labels[j]] = datas[i][j];
            this.data.push(newValue);
        }
    }

    getData(){
        return this.data;
    }

    getErrors(){
        return this.errors;
    }

    getMeta(){
        return this.meta;
    }
}

module.exports = Csv