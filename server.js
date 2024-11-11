const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");
const dotenv = require("dotenv");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
dotenv.config();

const port = process.env.PORT || 3000;


app
.use(bodyParser.json())
.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    next();
})
.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
.use('/', require('./routes'))

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log("Web Server is listening at port " + (port))
    }
});