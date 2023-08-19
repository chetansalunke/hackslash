const express=require('express');
const app=express();
const port=8000;
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require('body-parser'); // Enable JSON request body parsing
const { connect } = require('http2');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json()); // Enable JSON request body parsing

// Database configuration
const connection = mysql.createConnection({
	host:'localhost',
	database:'auth',
	user:'root',
	password:'abc54321'
});

// Database configuration
connection.connect((err)=>{
	if(err)
	{
		console.log(`Error occure when connection to the MySql ${err.stack}`);
	}
	else{
		console.log(`Connected SuccesFully `);
	}
});
// app.get((request,response)=>{
// 	const query =
// });
app.post("/api/contact",(request,response)=>{
	console.log(request.body);
	
	const name = request.body.userName;
	console.log(name);
	const email = request.body.userEmail;
	const phone = request.body.userPhone;
	const message = request.body.userMessage;
	
	const query = `INSERT INTO auth.login_master (user_name, email, password, message) VALUES ("${name}", "${email}", "${phone}", "${message}")`;
	console.log(query);

	connection.query(query,(err,res)=>{
		if(err)
		{
			console.log(`Unable to insert the data in database ${err}`);
			response.status(500).send('Error fetching data from the database');
		}
		else{
			response.send("Insert Data Succesfully");
			console.log(res);

		}
	})
});


app.get("/",(request,response)=>{
	response.sendFile(path.join(__dirname+"/index.html"));
	const resBody=response.body;
	console.log(resBody);
});
app.get('/data',(request,response)=>{

	const query = 'Select * from auth.login_master';

	connection.query(query,(err,result)=>{
		if(err)
		{
			console.log(`Unable to fetch the value ${err}`);
		}
		else
		{
			const res = response.json(result);
			console.log(res);
		}
	});

})
app.listen(port,(err)=>{
	if(err)
	{
		console.log(`Server is not working on Port: ${err}`);
	}
	else{
		console.log(`Server is running on the port ${port}`);
	}
	
});










// const express=require('express');
// const app=express();
// const port=3000;

// app.use(express.static("learn"));
// app.get("/",function(request,response){
// response.redirect("/index.html");
// });

// app.listen(port,function(err){
// if(err)
// {
// 	console.log(`some error occur ${err}`);
// }
// console.log(`server is ready to accept the request on port ${port}`);
// });