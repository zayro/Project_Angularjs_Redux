module.exports = function (app) {
   // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
