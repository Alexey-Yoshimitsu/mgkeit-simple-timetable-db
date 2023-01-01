const express = require("express")
const app =  express()
const g1SA1122 = require("./1SA-11-22.json")



app.get("/",(req,res)=>{
    res.json({"key":"main route"})
})

app.get("/:group",(req,res)=>{
    let group = req.params.group
    res.json({"group":group})
})

app.get("/1SA-11-22",(req,res)=>{
    res.json(g1SA1122)
})


app.listen(229,()=>{
    console.log("app running on http://localhost:229")
})