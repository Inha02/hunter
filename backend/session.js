const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const app = express()

app.use(
    session({
        secret: "secret code",
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({ mongoUrl: process.env.DB_CONNECT }),
        cookie: { MaxAge: 60 * 60 * 1000 },
    })
);

app.listen(8080, () => {
    console.log('서버 실행 중');
}); 