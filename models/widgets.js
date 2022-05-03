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
            return w.id === id;
        });
    };
    
    static updateWidget = (id, updatedWidget) => {
        console.log(`\t\tWidgetsModel : updateWidget(${id})`);

        // Find the specified widget by ID and replace/update it
        const widgetIndex = widgets.findIndex(w => (w.id === id));
        
        // What if it isn't found?
        if (widgetIndex === -1) {
            return null;
        }

        widgets[widgetIndex] = updatedWidget;
        return updatedWidget;
    };
    
    static deleteWidget = (id) => {
        console.log(`\t\tWidgetsModel : deleteWidget(${id})`);
        
        const originalWidgetsCount = widgets.length;

        // Remove the specified widget by ID
        widgets = widgets.filter((w) => {
          return w.id !== id;
        });

        // What if it isn't found? 
        if (originalWidgetsCount === widgets.length) {
            return false;
        }

        return true;
    };
}

module.exports = WidgetsModel;