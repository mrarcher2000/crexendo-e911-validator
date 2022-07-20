const router = require('express').Router();


router.get('', (req, res) => {
    
    res.render('login');
});

router.get('/main', (req, res) => {

    res.render('home');
});


module.exports = router;