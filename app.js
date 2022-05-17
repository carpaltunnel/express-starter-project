const express = require('express');
const bodyParser = require('body-parser');
const db = require('./lib/database');
const widgetsRouter = require('./routes/widgets.routes');
const errorMiddleware = require('./middleware/errorHandler');
const widgetColorChecker = require('./middleware/widgetColorChecker');

const app = express();
app.use(bodyParser.json());

app.post('*', widgetColorChecker());
app.put('*', widgetColorChecker());

app.use('/api/v1/widgets', widgetsRouter);

// Error handler middleware should be added last!
app.use(errorMiddleware());

  /*
    DB Config JSON : 
    "database": {
      "url": "127.0.0.1",
      "port": 27017,
      "database": "test",
      "options": {
        "useNewUrlParser": true,
        "useUnifiedTopology": true,
        "poolSize": 10,
        "maxPoolSize": 20
      }
    }
  */
const dbConfig = {
	url: '127.0.0.1',
	port: 27017,
	database: 'arcaDB',
	options: {
		useNewUrlParser: true,
        useUnifiedTopology: true,
		//poolSize: 3,
		//maxPoolSize: 10,
	},
};

db.configure(dbConfig);


app.listen(3000, () => {
	console.log('Listening on port 3000');
});

module.exports = app;
