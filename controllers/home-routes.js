const router = require('express').Router();


router.get('/main', (req, res) => {

    res.render('home');
});


module.exports = router;