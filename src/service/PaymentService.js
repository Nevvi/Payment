'use strict'

const braintree = require("braintree");

module.exports = class PaymentService {
    constructor() {
        this.gateway = braintree.connect({
            environment: braintree.Environment.Sandbox,
            merchantId: "27f4b9vkmdbvyj9s",
            publicKey: "4sgpcpnnngn5p2jj",
            privateKey: "e7fbf82366ba7106651c75a59f8a38f2"
        });
    }

    async createToken(customerId) {
        const params = customerId ? {customerId} : {}
        return await this.gateway.clientToken.generate(params)
    }

    async createTransaction(sessionId, amount) {
        return await this.gateway.transaction.sale({
            amount: amount,
            paymentMethodNonce: sessionId,
            options: {
                submitForSettlement: true
            }
        })
    }
}