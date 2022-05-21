const model = require('../models/widgets');
const { v4: uuidv4 } = require('uuid');
class WidgetsCoordinator {
    static createWidget = (widget) => {
        console.log('\tWidgetsCoordinator : createWidget');
        widget.id = uuidv4();
        return model.createWidget(widget);
    };
    
    static getWidgets = () => {
        console.log('\tWidgetsCoordinator : getWidgets');
        return model.getWidgets();
    };
    
    static getWidget = (id) => {
        console.log(`\tWidgetsCoordinator : getWidget(${id})`);
        return model.getWidget(id);
    };
    
    static updateWidget = (id, updatedWidget) => {
        console.log(`\tWidgetsCoordinator : updateWidget(${id})`);
        // Ensure the updatedWidget id does not change or get removed
        updatedWidget.id = id;
        return model.updateWidget(id, updatedWidget);
    };
    
    static deleteWidget = (id) => {
        console.log(`\tWidgetsCoordinator : deleteWidget(${id})`);
        return model.deleteWidget(id);
    };

    static patchWidget = (id, patchedWidget) => {
        return model.patchWidget(id, patchedWidget);
    };
}

module.exports = WidgetsCoordinator;