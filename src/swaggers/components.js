import { userComponents } from './users.js'
import { authComponents } from './auth.js'

const errors = {
    occurredError: {
        properties: {
            status: {
                type: 'string',
                example: 'error',
            },
            message: {
                type: 'string',
                example: 'An error occurred',
            },
            data: {
                type: 'array',
                example: [],
            },
        },
    },
}

const components = {
    errors,
    userComponents,
    authComponents,
}

export default components
