'use strict';

var _path = require('path');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _routing = require('./middleware/routing.mw');

var _routing2 = _interopRequireDefault(_routing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLIENT_PATH = (0, _path.join)(__dirname, '../../client');

var app = (0, _express2.default)();

app.use(_express2.default.static(CLIENT_PATH));
app.use(_express2.default.json());

app.use('/api', _routes2.default);

app.use(_routing2.default);

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});