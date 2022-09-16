import { Validator } from 'node-input-validator'
import * as apiRespone from '../helpers/ApiRespone.js'

const loginValidator = async (req, res, next) => {
    const rules = {
        username: 'required|email',
        password: 'required',
    }

    const messages = {
        'username.required': 'The username field is required',
        'password.required': 'The password field is required',
    }

    const v = new Validator(req.body, rules, messages)
    const matched = await v.check()

    if (!matched) {
        apiRespone.apiError(res, 'failed', v.errors, 422)
    } else {
        next()
    }
}

export default loginValidator
