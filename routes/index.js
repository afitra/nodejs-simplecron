var express = require('express');
var router = express.Router();
 
var  { jadwal }=  require( '../tes');
/* GET home page. */
router.get('/', async function(req, res, next) {
    await jadwal.start()
  await res.render('index', { title: 'Express' });
});

router.get('/stop', async function(req, res, next) {
console.log(jadwal.stop(),">>>>");
res.send("stop")
  
});
router.get('/start', async function(req, res, next) {
  await jadwal()
  
});

module.exports = router;
