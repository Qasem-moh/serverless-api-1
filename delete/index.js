const People = require('./schema')

exports.handler = async(event)=> {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        let items; 
        if (id) {
            items = await People.delete({'id': id});
            // items = items[0];

        } else {
            return 'no id was entered';
        }
        
        return {
            statusCode: 200,
            body: JSON.stringify(`Successfully deleted ${id}`)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
}