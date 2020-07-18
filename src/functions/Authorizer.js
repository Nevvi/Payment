'use strict'

const AbstractAuthorizer = require('../../Common/authorization/AbstractAuthorizer')
const {HttpVerb} = require('../../Common/authorization/AuthPolicy')

class Authorizer extends AbstractAuthorizer {
    generatePermissions(authPolicy, userId) {
        if (userId) {
            authPolicy.allowMethod(HttpVerb.POST, `/v1/token`)
            authPolicy.allowMethod(HttpVerb.POST, `/v1/transaction`)
        } else {
            authPolicy.denyAllMethods()
        }
    }
}

const authorizer = new Authorizer()

module.exports.authorize = async (event) => {
    return await authorizer.authorize(event)
}