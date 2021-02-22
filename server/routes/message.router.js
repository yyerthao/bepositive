const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated} = require('../modules/authentication-middleware');



router.get('/', rejectUnauthenticated, (req, res) => {
let sqlText =
    `SELECT message.image, message.details, genre.name, message.id FROM "user"
    JOIN message ON message.user_id = "user".id
    JOIN genre ON genre.id = message.genre_id
    WHERE "user".id = $1;`
  pool.query(sqlText, [req.user.id])
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log('Error fetching message', error);
      res.sendStatus(500);
    })
  })





router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;
