var express = require('express');
var router = express.Router();

var machines = {};



/* GET home page. */
router.route('/')
    .get(function (req, res) {
        res.render('index',{machines:machines,time:new Date().getTime()/1000});
    })
    .put(function (req, res) {

        var ip = req.headers['x-forwarded-for'];
        //console.log(ip);

        machines[req.body.name] = req.body;
        machines[req.body.name].ip = ip;

        machines[req.body.name].lastUpdate = new Date().getTime()/1000;

        res.json({ok: true});
    });




module.exports = router;
