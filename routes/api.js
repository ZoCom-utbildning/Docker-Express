var express = require('express');
var router = express.Router();
const faker = require('faker');

/* GET home page. */
router.get('/', function (req, res, next) {
  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push(faker.name.firstName());
  }
  res.json(data);
});

module.exports = router;
