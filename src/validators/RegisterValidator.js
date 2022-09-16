import { Validator } from 'node-input-validator'
import * as apiRespone from '../helpers/ApiRespone.js'

const registerValidator = async (req, res, next) => {
    const rules = {
        username: 'required|email|unique:User,username,',
        password: 'required|minLength:6',
        name: 'required',
    }

    const messages = {
        'username.required': 'The username field is required',
    }

    const v = new Validator(req.body, rules, messages)
    const matched = await v.check()

    if (!matched) {
        apiRespone.apiError(res, 'failed', v.errors, 422)
    } else {
        next()
    }
}

export default registerValidator
