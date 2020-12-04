var express = require('express');
var router = express.Router();
const faker = require('faker');

/* GET home page. */
router.get('/', (req, res, next) => {
  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push(faker.name.firstName());
  }
  res.json(data);
});


router.post('/:name', (req, res, next) => {
  const name = req.params.name;
  res.json({
    message: 'Grattis du la till namnet ' + name
  })
});

module.exports = router;
