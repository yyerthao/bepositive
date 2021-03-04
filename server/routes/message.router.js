const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated} = require('../modules/authentication-middleware');



router.get('/', rejectUnauthenticated, (req, res) => {
let sqlText =
    `SELECT message.name, message.image, message.details, message.id FROM "user"
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




// ---------------------------- POST A MESSAGE ----------------------------
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.body)
  console.log('isAuthenticated?', req.isAuthenticated());
  let id = req.user.id;
  let queryText = `
    INSERT INTO "message" ("name", "image", "details", "user_id", "genre_id")
    VALUES ($1, $2, $3, $4, $5)
    RETURNING "id";`;
  pool.query(queryText, [req.body.name, req.body.image, req.body.details, id, req.body.genre_id])
    .then((result) => {
      console.log('RESULT: ', result)
      const createdMessageId = result.rows[0].id // message_id
      const messageGenreQuery = `
      INSERT INTO "message_genre" ("message_id", "genre_id")
      VALUES  ($1, $2);`;
      pool.query(messageGenreQuery, [createdMessageId, req.body.genre_id])
    })
    .then(result => {
      res.send(result.rows);
      res.sendStatus(201); 
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;


// ---------------------------- GET ONE SPECIFIC MESSAGE ----------------------------

router.get('/:id', rejectUnauthenticated, (req, res) => {
  let id = req.params.id;
  const queryText =
    `SELECT message.name, message.image, message.details FROM message_genre
    JOIN message ON message.id = message_genre.message_id
    JOIN genre ON message_genre.genre_id = genre.id
    WHERE message.id = $1`
  pool.query(queryText, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error inside GET ID route:', error);
      res.sendStatus(500);
    });
});
