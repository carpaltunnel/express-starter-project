const coordinator = require('../coordinators/widgets');

const createWidget = (req, res, next) => {
	console.log('widgetsController: createWidget');
	//console.log(JSON.stringify(req.body));
	const result = coordinator.createWidget(req.body);
	res.send(result);
};

const getWidgets = (req, res, next) => {
	//For testing error handler : 
	//	throw new Error('this stuff is broken');
	console.log('widgetsController: getWidgets');
	res.send(coordinator.getWidgets());
};

const getWidget = (req, res, next) => {
	console.log(`widgetsController: getWidget(${req.params.id})`);
	res.send(coordinator.getWidget(req.params.id));
};

const updateWidget = (req, res, next) => {
	console.log(`widgetsController: updateWidget(${req.params.id})`);
	//console.log(JSON.stringify(req.body));
	res.send(coordinator.updateWidget(req.params.id, req.body));
};

const deleteWidget = (req, res, next) => {
	console.log(`widgetsController: deleteWidget(${req.params.id})`);
	res.send(coordinator.deleteWidget(req.params.id));
};

module.exports = {
	createWidget,
	getWidgets,
	getWidget,
	updateWidget,
	deleteWidget,
};
