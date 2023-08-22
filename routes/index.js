var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /suma?a=3&b=7
router.get('/suma', function (req, res){
  const { a, b } = req.query
  const sum = parseInt(a) + parseInt(b);
  res.json({sum})
})

router.get('/resta', function (req,res){
  const { a, b } = req.query;
  const resta = a - b;
  res.json({resta});
})
router.post('/message', function (req,res) {
const { frase } = req.body;
res.json({frase});
})

module.exports = router;
