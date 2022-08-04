const router = require('express').Router();


router.get('', (req, res) => {
    console.log('Cookies: ', req.cookies);

    let storage = req.cookies;
    if ('access_token' in storage) {
        console.log('Redirecting...');
        res.render('home');
    }
    res.render('login');
});

router.get('/main', (req, res) => {
    console.log('Cookies: ', req.cookies);

    res.render('home');
});


module.exports = router;