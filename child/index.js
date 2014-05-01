module.exports = function(config) {
    var express = require('express');
    var router = express.Router();

    var grandchild = require('./grandchild')(config);
    router.use('/grandchild', grandchild);

    // TODO:  Add a redirect to the api docs if someone request the root of the API, or at least an informative note.
    router.use("/",function(req, res) {
            res.send("Hello from the child of " + config.app + ".\n");
        });

    return router;
}