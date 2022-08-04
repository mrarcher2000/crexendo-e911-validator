const express = require('express');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cookieParser = require('cookie-parser');


const app = express();
const PORT = process.env.PORT || 3001;


// const sess = {
//     secret: 'Cr3Xnd02022!',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     };


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
// app.use(session(sess));


app.use(routes);
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
// });