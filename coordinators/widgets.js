const model = require('../models/widgets');
class WidgetsCoordinator {
    static createWidget = (widget) => {
        console.log('\tWidgetsCoordinator : createWidget');
        widget.id = Math.floor(Math.random() * 10000000);
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
        updatedWidget.id = Number.parseInt(id);
        return model.updateWidget(id, updatedWidget);
    };
    
    static deleteWidget = (id) => {
        console.log(`\tWidgetsCoordinator : deleteWidget(${id})`);
        return model.deleteWidget(id);
    };
}

module.exports = WidgetsCoordinator;