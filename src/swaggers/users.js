const userComponents = {
    users: {
        properties: {
            status: {
                type: 'string',
                example: 'success',
            },
            message: {
                type: 'string',
                example: 'success',
            },
            data: {
                type: 'array',
                example: [
                    {
                        _id: '630c30c10db13f2294295c07',
                        name: 'user1',
                        email: 'user1@example.com',
                        isAdmin: false,
                        createdAt: '2022-08-31T03:19:55.494Z',
                        updatedAt: '2022-08-31T03:19:55.494Z',
                    },
                    {
                        _id: '630c30c10db13f2294295c08',
                        name: 'user2',
                        email: 'user2@example.com',
                        isAdmin: false,
                        createdAt: '2022-08-31T03:19:55.494Z',
                        updatedAt: '2022-08-31T03:19:55.494Z',
                    },
                ],
            },
        },
    },
    user: {
        properties: {
            status: {
                type: 'string',
                example: 'success',
            },
            message: {
                type: 'string',
                example: 'success',
            },
            data: {
                type: 'object',
                example: {
                    _id: '630c30c10db13f2294295c07',
                    name: 'user1',
                    email: 'user1@example.com',
                    isAdmin: false,
                    createdAt: '2022-08-31T03:19:55.494Z',
                    updatedAt: '2022-08-31T03:19:55.494Z',
                },
            },
        },
    },
}

const userPaths = {
    '/api/admin/users': {
        get: {
            tags: ['Users'],
            summary: 'Get all users in system',
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        $ref: '#/components/userComponents/user',
                    },
                },
                400: {
                    description: 'Error',
                    schema: {
                        $ref: '#/components/errors/occurredError',
                    },
                },
            },
        },
    },
    '/api/admin/users/{id}': {
        get: {
            tags: ['Users'],
            summary: 'Get user by ID',
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        $ref: '#/components/userComponents/user',
                    },
                },
                400: {
                    description: 'Error',
                    schema: {
                        $ref: '#/components/errors/occurredError',
                    },
                },
                404: {
                    description: 'Error',
                    schema: {
                        properties: {
                            status: {
                                type: 'string',
                                example: 'error',
                            },
                            message: {
                                type: 'string',
                                example: 'User not found',
                            },
                            data: {
                                type: 'array',
                                example: [],
                            },
                        },
                    },
                },
            },
        },
        put: {
            tags: ['Users'],
            summary: 'Update a user',
            parameters: [
                {
                    in: 'body',
                    required: true,
                    name: 'body',
                    schema: {
                        required: ['email', 'isAdmin', 'name'],
                        properties: {
                            email: {
                                type: 'string',
                                example: 'admin@example.com',
                            },
                            name: {
                                type: 'string',
                                example: 'admin',
                            },
                            isAdmin: {
                                type: 'boolean',
                                example: true,
                            },
                        },
                    },
                },
            ],
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        $ref: '#/components/userComponents/user',
                    },
                },
                400: {
                    description: 'Error',
                    schema: {
                        $ref: '#/components/errors/occurredError',
                    },
                },
                404: {
                    description: 'Error',
                    schema: {
                        properties: {
                            status: {
                                type: 'string',
                                example: 'error',
                            },
                            message: {
                                type: 'string',
                                example: 'User not found',
                            },
                            data: {
                                type: 'array',
                                example: [],
                            },
                        },
                    },
                },
            },
        },
        delete: {
            tags: ['Users'],
            summary: 'Delete a user',
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        properties: {
                            status: {
                                type: 'string',
                                example: 'success',
                            },
                            message: {
                                type: 'string',
                                example: 'Success',
                            },
                            data: {
                                type: 'array',
                                example: [],
                            },
                        },
                    },
                },
                400: {
                    description: 'Error',
                    schema: {
                        $ref: '#/components/errors/occurredError',
                    },
                },
            },
        },
    },
    '/api/users/profile':{
        get: {
            tags: ['Users'],
            summary: 'Get profile',
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        $ref: '#/components/userComponents/user',
                    },
                },
                400: {
                    description: 'Error',
                    schema: {
                        $ref: '#/components/errors/occurredError',
                    },
                },
                404: {
                    description: 'Error',
                    schema: {
                        properties: {
                            status: {
                                type: 'string',
                                example: 'error',
                            },
                            message: {
                                type: 'string',
                                example: 'User not found',
                            },
                            data: {
                                type: 'array',
                                example: [],
                            },
                        },
                    },
                },
            },
        },
        put: {
            tags: ['Users'],
            summary: 'Update profile',
            parameters: [
                {
                    in: 'body',
                    required: true,
                    name: 'body',
                    schema: {
                        required: ['name'],
                        properties: {
                            email: {
                                type: 'string',
                                example: 'user1@example.com',
                            },
                            name: {
                                type: 'string',
                                example: 'user1',
                            },
                        },
                    },
                },
            ],
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        $ref: '#/components/userComponents/user',
                    },
                },
                400: {
                    description: 'Error',
                    schema: {
                        $ref: '#/components/errors/occurredError',
                    },
                },
                404: {
                    description: 'Error',
                    schema: {
                        properties: {
                            status: {
                                type: 'string',
                                example: 'error',
                            },
                            message: {
                                type: 'string',
                                example: 'User not found',
                            },
                            data: {
                                type: 'array',
                                example: [],
                            },
                        },
                    },
                },
            },
        },
    }
}

export { userPaths, userComponents }
