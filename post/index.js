const uuid = require('uuid').v4;
const People = require('./schema')

exports.handler = async (event) => {
    try {
        const id = uuid();
        const {name} = JSON.parse(event.body);
        let record = new People({id, name});
        let newRecord = await record.save();
        return {
            statusCode: 201,
            body: JSON.stringify(newRecord)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
}