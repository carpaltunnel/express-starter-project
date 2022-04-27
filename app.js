const express = require('express');
const bodyParser = require('body-parser')
const widgetsRouter = require('./routes/widgets.routes');

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/widgets', widgetsRouter);
app.listen(3000, () => {
	console.log('Listening on port 3000');
});

module.exports = app;
