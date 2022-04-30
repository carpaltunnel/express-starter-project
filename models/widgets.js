const widgets = [];
class WidgetsModel {
    static createWidget = (widget) => {
        console.log('\t\tWidgetsModel : createWidget');
        //console.log(JSON.stringify(widget, 2, 2));
        // Database insert here;
        widgets.push(widget);
        return widget;
    };
    
    static getWidgets = () => {
        console.log('\t\tWidgetsModel : getWidgets');
        return widgets;
    };
    
    static getWidget = (id) => {
        console.log(`\t\tWidgetsModel : getWidget(${id})`);
        return widgets.find((w) => {
            return w.id === Number.parseInt(id);
        });
    };
    
    static updateWidget = (id, updatedWidget) => {
        console.log(`\t\tWidgetsModel : updateWidget(${id})`);
        return true;
    };
    
    static deleteWidget = (id) => {
        console.log(`\t\tWidgetsModel : deleteWidget(${id})`);
        // TODO : FIX THIS AND COMMIT!!!
        //
        return widgets.map((w) => {
            return w.id === Number.parseInt(id);
        });
    };
}

module.exports = WidgetsModel;