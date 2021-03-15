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
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});


// ---------------------------- GET ONE SPECIFIC MESSAGE ----------------------------

router.get('/:id', rejectUnauthenticated, (req, res) => {
    let id = req.params.id;
    const queryText =
    `SELECT message.name, message.image, message.details, message.id FROM message_genre
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
// ---------------------------- DELETE ONE SPECIFIC MESSAGE ----------------------------

  router.delete('/:id', rejectUnauthenticated, (req, res) => {
    let id = req.params.id
    console.log('ID of message to delete', id);
    const sqlText = 'DELETE FROM "message" WHERE id=$1';
    pool.query(sqlText, [id])
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Error completing DELETE query', err);
        res.sendStatus(500);
      });
  });


// ---------------------------- UPDATE ONE SPECIFIC MESSAGE ----------------------------
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('Inside put route server side');
    let messageID = req.params.id;
    let userID = req.user.id;
    console.log('ID of message', messageID);
    console.log('ID of user:', userID);
    let queryText = 
    `UPDATE "message" SET
      "name" = $1,
      "image" = $2,
      "details" =$3,
      "user_id" = $4,
      "genre_id" = $5
    WHERE message.id = $6;`;
    pool.query(queryText, [req.body.name, req.body.image, req.body.details, userID, req.body.genre_id, messageID])
    .then((result) => {
      console.log('UPDATE RESULT: ', result)
      console.log('UPDATE RESULT.ROWS: ', result.rows); 
      let updatedMessageQuery = `
        UPDATE "message_genre"
        SET "genre_id" = $1
        WHERE message_id = $2;
      `; 
      pool.query(updatedMessageQuery, [req.body.genre_id, messageID])
    })
    .then(result => {
      console.log('MESSAGE UPDATED AND BACK FROM DB');
      res.sendStatus(201); //do 201 
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});
  





module.exports = router;