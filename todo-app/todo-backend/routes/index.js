const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  try {
    const addedTodos = await redis.getAsync('added_todos');
    res.json({ added_todos: addedTodos })
  } catch (err) {
    res.status(400).send(err.message);
  }
})

module.exports = router;
