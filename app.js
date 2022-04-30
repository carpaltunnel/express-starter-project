const express = require('express');
const bodyParser = require('body-parser')
const widgetsRouter = require('./routes/widgets.routes');
const errorMiddleware = require('./middleware/errorHandler');

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/widgets', widgetsRouter);

// Error handler middleware should be added last!
app.use(errorMiddleware());

app.listen(3000, () => {
	console.log('Listening on port 3000');
});

module.exports = app;
