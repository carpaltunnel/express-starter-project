const createWidget = (req, res, next) => {
	console.log('createWidget has been invoked with body :');
	console.log(JSON.stringify(req.body));
	res.send('createWidgets');
};

const getWidgets = (req, res, next) => {
	console.log('getWidgets has been invoked');
	res.send('getWidgets');
};

const getWidget = (req, res, next) => {
	console.log(`getWidget has been invoked : ${req.params.id}`);
	res.send(`getWidget : ${req.params.id}`);
};

const updateWidget = (req, res, next) => {
	console.log(`updateWidget has been invoked : ${req.params.id} with body :`);
	console.log(JSON.stringify(req.body));
	res.send(`updateWidget : ${req.params.id}`);
};

const deleteWidget = (req, res, next) => {
	console.log(`deleteWidget has been invoked : ${req.params.id}`);
	res.send(`deleteWidget : ${req.params.id}`);
};

module.exports = {
	createWidget,
	getWidgets,
	getWidget,
	updateWidget,
	deleteWidget,
};
