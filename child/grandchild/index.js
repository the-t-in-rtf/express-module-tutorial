module.exports = function(config) {
    var express = require('express');
    var router = express.Router();

    router.use("/",function(req, res) {
            res.send("Hello from the grandchild of " + config.app + ".\n");
        });

    return router;
}