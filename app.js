const express = require('express');
const controller = require('./cities/controller');
const handler = require('./error-handler.middleware');
const app = express();

app.use('/cities', controller);
app.use(handler)
app.listen(3000, () => { });

