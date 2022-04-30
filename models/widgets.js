let widgets = [];
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

        // What if it isn't found?

        return widgets.find((w) => {
            return w.id === Number.parseInt(id);
        });
    };
    
    static updateWidget = (id, updatedWidget) => {
        console.log(`\t\tWidgetsModel : updateWidget(${id})`);

        // Find the specified widget by ID and replace/update it
        const widgetIndex = widgets.findIndex(w => (w.id === Number.parseInt(id)));
        widgets[widgetIndex] = updatedWidget;

        // What if it isn't found?
        return updatedWidget;
    };
    
    static deleteWidget = (id) => {
        console.log(`\t\tWidgetsModel : deleteWidget(${id})`);
        
        // Remove the specified widget by ID
        widgets = widgets.filter((w) => {
          return w.id !== Number.parseInt(id);
        });

        // What if it isn't found?  Delete discussion.
        
        return true;
    };
}

module.exports = WidgetsModel;