'use strict';

module.exports.createToken = async (event) => {
    try{
        console.log("Received request to create token")
        return createResponse(201, {})
    } catch (e) {
        return createResponse(e.statusCode, e.message)
    }
}

function createResponse(statusCode, body) {
    return {
        statusCode: statusCode || 500,
        body: JSON.stringify(body)
    }
}