import { Validator } from 'node-input-validator'
import * as apiRespone from '../helpers/ApiRespone.js'

const updateUserValidator = async (req, res, next) => {
    const rules = {
        email: 'email|unique:User,email,' + req.params.id,
    }

    const messages = {}

    const v = new Validator(req.body, rules, messages)
    const matched = await v.check()

    if (!matched) {
        apiRespone.apiError(res, 'failed', v.errors, 422)
    } else {
        next()
    }
}

export default updateUserValidator
