
const fs = require('fs');
const editJsonFile = require("edit-json-file");
var cron = require('node-cron');
 

 var jadwal = cron.schedule('*/3 * * * * *',async  () => {
    // read query
    let rawdata = fs.readFileSync('tes.json');
     file = await editJsonFile(`${__dirname}/config.json` );
     if(await  new Date().getSeconds()== 0 ) {
         file.data.count=0
         count =0
     }
     
    
    // process query
    count=file.data.count
    count++
    
    
    
    // save query
    file.set("count", count);
 
   await  file.save();
    let student = JSON.parse(rawdata);
    console.log(student.validate, ">>>>", count,">>>", new Date().getMinutes(),"<<<<<<", new Date().getSeconds());
});







module.exports= { jadwal };