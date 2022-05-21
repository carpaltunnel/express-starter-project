const express = require('express');
const widgetControllers = require('../controllers/widgets.controllers');
const router = express.Router();

router.post('/', widgetControllers.createWidget);
router.get('/',  widgetControllers.getWidgets);
router.get('/:id', widgetControllers.getWidget);
router.put('/:id', widgetControllers.updateWidget);
router.delete('/:id', widgetControllers.deleteWidget);
router.patch('/:id', widgetControllers.patchWidget);

module.exports = router