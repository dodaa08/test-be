import express from "express";

const app = express();


app.get("/", (req, res)=>{
	res.send("Working default get end point..");
	console.log("Working default get end point..");
});

app.get("/health", (req, res)=>{
	res.send("Healthy baby!");
	console.log("Healthy baby!");
});




app.listen(8080, ()=>{
	console.log("Backend running on", 8080);
});
