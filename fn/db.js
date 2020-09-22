/**
 * Created by tutrinh on 5/11/18.
 */

var mysql = require('mysql');
var fs = require('fs');

exports.load = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
            host: "lecturedb.mysql.database.azure.com", 
            user: "myadmin@lecturedb", 
            password: "Mank15041504", 
            database: "minhman1504",
             port: 3306, 
             ssl:{ca:fs.readFileSync('./BaltimoreCyberTrustRoot.crt.pem')}}  
        );

    cn.connect();

    cn.query(sql, function(error, rows, fields) {
        if (error) {
            reject(error);
        } else {
            resolve(rows);
        }

        cn.end();
    });
});
}

exports.save = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
            host: "lecturedb.mysql.database.azure.com", 
            user: "myadmin@lecturedb", 
            password: "Mank15041504", 
            database: "minhman1504",
             port: 3306, 
             ssl:{ca:fs.readFileSync('./BaltimoreCyberTrustRoot.crt.pem')}}  
             
        );

    cn.connect();

    cn.query(sql, function(error, value) {
        if (error) {
            reject(error);
        } else {
            resolve(value);
        }

        cn.end();
    });
});
}