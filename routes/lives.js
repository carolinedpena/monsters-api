const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (req, res, next) => {
    pool.query('SELECT * FROM lives', (err, response) => {
        if (err) return next(err);

        res.json(response.rows)
    });
});

router.get('/conditions', (req, res, next) => {
    pool.query(
        'SELECT * FROM lives JOIN habitats on habitats.name = lives.habitat',
        (err, response) => {
            if (err) return next(err)

            res.json(response.rows);
        }
    )
})

module.exports = router;