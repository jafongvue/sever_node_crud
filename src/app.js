const express = require('express');
const app = express();
require('dotenv').config();//config.env
const cors = require('cors');
const router = require('../src/routes/index');
const dbconnection =require('../src/dbconnection');//import dbconnection

startServer = () => {
    app.use(cors());

    dbconnection();//ເຊື່ອຕໍ່ຖານຂໍ້ມູນ

    app.use(express.json());

    app.use('/v0/api', router);

    app.listen(8000, () => {
        console.log('server is listening port 8000');
    })
}

startServer();