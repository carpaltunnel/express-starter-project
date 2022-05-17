const DB = require('../lib/database');
const COLLECTION = 'widgets';

// TODO : REMOVE ME
let widgets = [];
class WidgetsModel {
    static createWidget = async (widget) => {
        console.log('\t\tWidgetsModel : createWidget');
        //console.log(JSON.stringify(widget, 2, 2));
        // Database insert here;
        await DB.getDb().collection(COLLECTION).insertOne(widget);
        return widget;
    };
    
    static getWidgets = () => {
        console.log('\t\tWidgetsModel : getWidgets');

        return DB.getDb().collection(COLLECTION).find({}).toArray();
    };
    
    static getWidget = (id) => {
        console.log(`\t\tWidgetsModel : getWidget(${id})`);

        return DB.getDb().collection(COLLECTION).findOne({ id });
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
        
        return DB.getDb().collection(COLLECTION).deleteOne({ id });
    };
}

module.exports = WidgetsModel;