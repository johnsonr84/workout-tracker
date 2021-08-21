const router = require("express").Router()
var path = require('path');

router.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/workout', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/workout.html'));
});

module.exports = router;