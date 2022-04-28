const coordinator = require('../coordinators/widgets');

const createWidget = (req, res, next) => {
	console.log('widgetsController: createWidget');
	//console.log(JSON.stringify(req.body));
	coordinator.createWidget(req.body);
	res.send('createWidgets');
};

const getWidgets = (req, res, next) => {
	console.log('widgetsController: getWidgets');
	coordinator.getWidgets();
	res.send('getWidgets');
};

const getWidget = (req, res, next) => {
	console.log(`widgetsController: getWidget(${req.params.id})`);
	coordinator.getWidget(req.params.id);
	res.send(`getWidget : ${req.params.id}`);
};

const updateWidget = (req, res, next) => {
	console.log(`widgetsController: updateWidget(${req.params.id})`);
	//console.log(JSON.stringify(req.body));
	coordinator.updateWidget(req.params.id, req.body);
	res.send(`updateWidget : ${req.params.id}`);
};

const deleteWidget = (req, res, next) => {
	console.log(`widgetsController: deleteWidget(${req.params.id})`);
	coordinator.deleteWidget(req.params.id);
	res.send(`deleteWidget : ${req.params.id}`);
};

module.exports = {
	createWidget,
	getWidgets,
	getWidget,
	updateWidget,
	deleteWidget,
};
