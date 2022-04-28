class WidgetsCoordinator {
    static createWidget = (widget) => {
        console.log('\tWidgetsCoordinator : createWidget');
        return true;
    };
    
    static getWidgets = () => {
        console.log('\tWidgetsCoordinator : getWidgets');
        return true;
    };
    
    static getWidget = (id) => {
        console.log(`\tWidgetsCoordinator : getWidget(${id})`);
        return true;
    };
    
    static updateWidget = (id, updatedWidget) => {
        console.log(`\tWidgetsCoordinator : updateWidget(${id})`);
        return true;
    };
    
    static deleteWidget = (id) => {
        console.log(`\tWidgetsCoordinator : deleteWidget(${id})`);
        return true;
    };
}

module.exports = WidgetsCoordinator;