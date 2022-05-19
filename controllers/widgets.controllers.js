const coordinator = require('../coordinators/widgets');

const createWidget = async (req, res, next) => {
	console.log('widgetsController: createWidget');
	//console.log(JSON.stringify(req.body));

	const result = await coordinator.createWidget(req.body);
	res.status(201).json(result);
};

const getWidgets = async (req, res, next) => {
	//For testing error handler : 
	//	throw new Error('this stuff is broken');
	console.log('widgetsController: getWidgets');

	const results = await coordinator.getWidgets();

	res.status(200).json(results);
};

const getWidget = async (req, res, next) => {
	console.log(`widgetsController: getWidget(${req.params.id})`);

	const widget = await coordinator.getWidget(req.params.id);

	// If widget with ID was found in database
	if (widget) {
		res.status(200).json(widget);
	} else {
		res.status(404).send();
	}
};

const updateWidget = async (req, res, next) => {
	console.log(`widgetsController: updateWidget(${req.params.id})`);
	//console.log(JSON.stringify(req.body));
	const widget = await coordinator.updateWidget(req.params.id, req.body);

	// If widget with ID was found in database
	if (widget) {
		res.status(200).json(widget);
	} else {
		res.status(404).send();
	}
};

const deleteWidget = async (req, res, next) => {
	console.log(`widgetsController: deleteWidget(${req.params.id})`);

	const deleteResult = await coordinator.deleteWidget(req.params.id);

	// If widget with ID was found in database
	if (deleteResult.deletedCount === 1) {
		res.status(200).send();
	} else {
		res.status(404).send();
	}
};

module.exports = {
	createWidget,
	getWidgets,
	getWidget,
	updateWidget,
	deleteWidget,
};
