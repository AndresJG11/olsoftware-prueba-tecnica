import sqlite3 from 'sqlite3'

export default async (req, res) => {
	let username = req["body"]["username"];
	let password = req["body"]["password"];
	let db = new sqlite3.Database("./database.sqlite", sqlite3.OPEN_READWRITE);
	await new Promise(resolve => setTimeout(resolve, 3000));
   var data = [];
	db.all("select * from users where username = ? and password = ? ", [username, password], function(err, rows){
		data = rows;
		console.log(err, rows);
  		db.close();
 	  if(rows === undefined || rows.length === 0){
 		  res.json([false]);
 	  }
 	  else{
 		  res.json(data);
 	  }
   })

};
