var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gurjeet',{ name: ' Gurjeet Sandhu',
                         title:'Gurjeet Sandhu-Lab2',
                      age:'97',
                      programme:'Engineering of burger grese production',
                      autoBio:'he is a great guy, has a deep interest in quatum physics and calculas, throughout his life he had done a tremendous work in feild both theoratical and practical physics.'} );
});
//Gurjeet
router.get('/gurjeet', function(req, res, next) {
  res.render('gurjeet', { name: ' Gurjeet Sandhu',
                         title:'Gurjeet Sandhu',
                      age:'97',
                      programme:'Engineering of burger grese production',
                     autoBio:'Gurjeet is a complete nerd, has a deep interest in quatum physics and calculas, throughout his life he had done a tremendous work in feild both theoratical and practical physics and won many prizes'});
});
//Rajinder
router.get('/rajinder', function(req, res, next) {
  res.render('rajinderpal', { name: ' Rajinderpal Singh',
                         title:'Rajinderpal Singh',
                      age:'102',
                      programme:'Musquito Neurologist',
                      autoBio:'Gurjeet is a complete nerd, has a deep interest in quatum physics and calculs, throughout his life he had done a tremendous work in feild both theoratical and practical physics and won many prizes'});
});
//Jaspreeet
router.get('/jaspreet', function(req, res, next) {
  res.render('jaspreet', { name: ' Jaspreet Singh',
                         title:'Jaspreet Singh',
                      age:'10',
                      programme:'Computer Programming Diploma',
                      autoBio:'Jaspreet is a great person, he loves  computer programming and is extremly talented in solving problems and toruble shooting. He also takes interest in sports and fun activities. '});
});
module.exports = router;
