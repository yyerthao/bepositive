const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
  let queryText = `SELECT * FROM genre;`;
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log('Error fetching genre', error);
      res.sendStatus(500);
    })
})

module.exports = router;
