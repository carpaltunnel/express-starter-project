const DB = require('../lib/database');
const COLLECTION = 'widgets';

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
    
    static updateWidget = async (id, updatedWidget) => {
        console.log(`\t\tWidgetsModel : updateWidget(${id})`);

        // Only allow updates on these fields
        const updateQuery = {
            $set: {
                post: updatedWidget.post,
                year: updatedWidget.year,
                class: updatedWidget.class,
                color: updatedWidget.color,
                hexColor: updatedWidget.hexColor,
            }
        };

        const updateResult = await DB.getDb().collection(COLLECTION).updateOne({ id }, updateQuery);

        if (updateResult.modifiedCount === 0) {
            return null;
        }
        return updatedWidget;
    };
    
    static deleteWidget = (id) => {
        console.log(`\t\tWidgetsModel : deleteWidget(${id})`);
        
        return DB.getDb().collection(COLLECTION).deleteOne({ id });
    };
}

module.exports = WidgetsModel;