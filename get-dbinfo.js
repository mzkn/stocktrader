var mysql = require('mysql');
var aa = require('aa');

var code = '6058';
var STOCK_NAME = 'poi';
var fmtdate = '2016-11-24 23:41:30';
var price = '4280';

// insertdb(code, STOCK_NAME, fmtdate, price);
var dbConf= {
host : 'localhost',
       user : 'mizkun',
       password : 'skyblue5090',
       database : 'STOCK_TRADER'
}

var connection = mysql.createConnection(dbConf);
select(connection);

//======CALL BACK=======

//======================

function select(connection){
  connection.connect();
  connection.query('SELECT * FROM STOCK_INFO;', function(err, result){
      if(err) throw err;
      console.log('res.length : ' + result.length);
      for(var i = 0; i < result.length; i++){
      console.log('ID : ' + result[i].ID + 'STOCK_PRICE : ' + result[i].PRICE);
}
      });

  connection.end();
  return 1;
}
