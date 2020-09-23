import sqlite3 from 'sqlite3'

export default async (req, res) => {
	let db = new sqlite3.Database("./database.sqlite", sqlite3.OPEN_READWRITE);
   var data = [];
   db.all("select * from usuarios_existentes", function(err, rows){
        data = rows;
        db.close();
 	  if(rows === undefined){
 		  res.json([]);
 	  }
 	  else{
 		  res.json(data);
 	  }
   })
};