const authComponents = {
    auth: {
        properties: {
            status: {
                type: 'string',
                example: 'success',
            },
            data: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        token: {
                            example:
                                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGVmZDI3NGIxMTZkMTc0MDBjZm',
                        },
                        token_type: {
                            example: 'bearer',
                        },
                    },
                },
            },
        },
    },
}

const authPaths = {
    '/api/auth/login': {
        post: {
            tags: ['Authorization'],
            summary: 'Login system',
            parameters: [
                {
                    in: 'body',
                    required: true,
                    name: 'body',
                    schema: {
                        required: ['username', 'password', 'name'],
                        properties: {
                            username: {
                                type: 'string',
                                example: 'admin@example.com',
                            },
                            password: {
                                type: 'string',
                                example: '123456',
                            },
                        },
                    },
                },
            ],
            responses: {
                200: {
                    description: 'Login successfully',
                    schema: {
                        $ref: '#/components/authComponents/auth',
                    },
                },
                401: {
                    description: 'Login failed',
                    schema: {
                        properties: {
                            status: {
                                type: 'string',
                                example: 'error',
                            },
                            message: {
                                type: 'string',
                                example: 'Invalid email or password',
                            },
                        },
                    },
                },
                422: {
                    description: 'validator',
                    schema: {
                        properties: {
                            status: {
                                type: 'string',
                                example: 'error',
                            },
                            errors: {
                                type: 'array',
                                example: [
                                    'username field is required',
                                    'password field is required',
                                ],
                            },
                        },
                    },
                },
            },
        },
    },
    '/api/auth/register': {
        post: {
            tags: ['Authorization'],
            summary: 'Register a user',
            parameters: [
                {
                    in: 'body',
                    required: true,
                    name: 'body',
                    schema: {
                        required: ['username', 'password', 'name'],
                        properties: {
                            username: {
                                type: 'string',
                                example: 'user@example.com',
                            },
                            password: {
                                type: 'string',
                                example: '123456',
                            },
                            name: {
                                type: 'string',
                                example: 'user',
                            },
                        },
                    },
                },
            ],
            responses: {
                200: {
                    description: 'Register successfully',
                    schema: {
                        $ref: '#/components/authComponents/auth',
                    },
                },
                400: {
                    description: 'Register failed',
                    schema: {
                        properties: {
                            status: {
                                type: 'string',
                                example: 'error',
                            },
                            message: {
                                type: 'string',
                                example: 'An error occurred',
                            },
                        },
                    },
                },
                422: {
                    description: 'validator',
                    schema: {
                        properties: {
                            status: {
                                type: 'string',
                                example: 'error',
                            },
                            errors: {
                                type: 'array',
                                example: [
                                    'username field is required',
                                    'password field is required',
                                ],
                            },
                        },
                    },
                },
            },
        },
    },
}

export { authPaths, authComponents }
