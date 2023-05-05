
var cron = require('node-cron');
var count =0

 var jadwal = cron.schedule('*/5 * * * * *', () => {
    let date_ob = new Date();

    let minutes = date_ob.getMinutes();
    // current seconds
    let seconds = date_ob.getSeconds();
    const fs = require('fs');
    count++
    let rawdata = fs.readFileSync('tes.json');
    let student = JSON.parse(rawdata);
    console.log(student.validate, ">>>>", count,">>>", minutes,"<<<<<<", seconds);
});
module.exports= { jadwal };