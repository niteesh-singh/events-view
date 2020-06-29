const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static(__dirname + '/dist/events-view'));

ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/events-view/index.html'));
});

ngApp.listen(process.env.PORT || 8080);