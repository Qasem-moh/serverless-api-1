const People = require('./schema')

exports.handler = async(event)=> {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        const {name} = JSON.parse(event.body);
        let items; 
        if (id) {
            // get a specific record
            await People.update({
              'id': id
            },
            {
              'name': name
            })
            items = await People.query('id').eq(id).exec();
            items = items[0];

        } else {
            // get all records
            return 'no id was entered';
        }
        
        return {
            statusCode: 200,
            body: JSON.stringify(items)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
}