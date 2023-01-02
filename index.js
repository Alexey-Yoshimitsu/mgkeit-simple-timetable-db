const express = require("express");
const app = express();
//const g1SA1122 = require("./1СА-11-22.json");
let group_list = [
  "1И-1-22",
  "1И-2-22",
  "1И-3-22",
  "2И-21",
  "3И-20",
  "4И-19",
  "1ИП-1-22",
  "1ИП-2-22",
  "1ИП-3-22",
  "2ИП-1-21",
  "2ИП-2-21",
  "3ИП-1-20",
  "3ИП-2-20",
  "4ИП-19",
  "1СА-1-22",
  "1СА-2-22",
  "2СА-1-21",
  "2СА-2-21",
  "3СА-1-20",
  "3СА-2-20",
  "4СА-19",
  "1ЭК-22",
  "2ЭК-1-21",
  "2ЭК-2-21",
  "3ЭК-20",
  "4ЭК-19",
  "1ГД-1-22",
  "1ГД-2-22",
  "1ГД-3-22",
  "2ГД-1-21",
  "2ГД-2-21",
  "2ГД-3-21",
  "1СА-11-22",
  "1ИП-1-11-22",
  "1ИП-2-11-22",
  "3И-11-20",
  "2ИП-1-11-21",
  "3ИП-1-11-20",
  "3ИП-2-11-20",
  "1И-11-22",
  "2И-11-21",
  "2ИП-2-11-21",
];
const fs = require('fs');

//group_list.forEach((i)=>{fs.writeFileSync(`./groups/${i}.json`, JSON.stringify(g1SA1122))})


//fs.readdir("./groups/", (err, files) => {
//  if (err) console.log(err);
//  else {
//    files.forEach((file) => {
//      //console.log(String(file).replace(String(file).slice(-5),""))
//      if(group_list.includes(String(file).replace(String(file).slice(-5),""))){
//        
//      }else{
//        console.log("файл какой то группы отсутствует")
//        process.exit(5) 
//      }
//    });
//  }
//});


app.use(express.json());

app.post("/", (req, res) => {
  //console.log(req.body)
  let group = req.body.group;
  console.log(group);
  if (group_list.includes(group)) {
    let filla = require(`./groups/${group}.json`)
    res.json(filla)
  } else {
    res.json({ group: "not found" });
  }
});

//app.get("/:group", (req, res) => {
//  let group = req.params.group;
//  if(group_list.includes(group)){ res.json({ "group": group });}
//  else{ res.json({"group":"not found"})}
//});

app.listen(229, () => {
  console.log("app running on http://localhost:229");
});
