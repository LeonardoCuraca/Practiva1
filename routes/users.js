var express = require('express');
const db = require('../db/usersConnection.js');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    let results = await db.all();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/login/:user/:password', async (req, res, next) => {
  try {
    let results = await db.login(req.params.user, req.params.password);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
