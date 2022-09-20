const categoryComponents = {
    categories: {
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
                        _id: '632412e42ee1b300bce41529',
                        name: 'category 1',
                        sort: 1,
                        active: true,
                        childrens: [
                            {
                                _id: '632831a284baa0d0f4fab4b1',
                                name: 'category children 12',
                                sort: 2,
                                active: true,
                                childrens: [],
                                showFirstLevel: false,
                                createdAt: '2022-09-19T09:08:50.005Z',
                                updatedAt: '2022-09-19T09:08:50.005Z',
                            },
                        ],
                        createdAt: '2022-09-16T06:08:36.636Z',
                        updatedAt: '2022-09-19T10:04:00.906Z',
                        showFirstLevel: true,
                    },
                    {
                        _id: '632412f72ee1b300bce4152e',
                        name: 'category 2',
                        sort: 2,
                        active: true,
                        childrens: [],
                        createdAt: '2022-09-16T06:08:36.636Z',
                        updatedAt: '2022-09-19T10:04:00.906Z',
                        showFirstLevel: true,
                    },
                ],
            },
        },
    },
    category: {
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
                    _id: '632412e42ee1b300bce41529',
                    name: 'category 1',
                    sort: 1,
                    active: true,
                    childrens: [
                        {
                            _id: '632831a284baa0d0f4fab4b1',
                            name: 'category children 12',
                            sort: 2,
                            active: true,
                            childrens: [],
                            showFirstLevel: false,
                            createdAt: '2022-09-19T09:08:50.005Z',
                            updatedAt: '2022-09-19T09:08:50.005Z',
                        },
                    ],
                    createdAt: '2022-09-16T06:08:36.636Z',
                    updatedAt: '2022-09-19T10:04:00.906Z',
                    showFirstLevel: true,
                },
            },
        },
    },
}

const categoryPaths = {
    '/api/admin/category': {
        get: {
            tags: ['Category'],
            summary: 'Get all category',
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        $ref: '#/components/categoryComponents/categories',
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
        post:{
            tags: ['Category'],
            summary: 'Create a category',
            parameters: [
                {
                    in: 'body',
                    required: true,
                    name: 'body',
                    schema: {
                        required: ['name', 'sort', 'active', 'showFirstLevel'],
                        properties: {
                            name: {
                                type: 'string',
                                example: 'category 1',
                            },
                            sort: {
                                type: 'number',
                                example: '1',
                            },
                            active: {
                                type: 'boolean',
                                example: true,
                            },
                            parent: {
                                type: 'string',
                                example: '6324131d2ee1b300bce41533',
                            },
                            showFirstLevel: {
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
                        $ref: '#/components/categoryComponents/category',
                    },
                },
                400: {
                    description: 'Error',
                    schema: {
                        $ref: '#/components/errors/occurredError',
                    },
                },
            },
        }
    },
    '/api/admin/category/{id}': {
        get: {
            tags: ['Category'],
            summary: 'Get category by ID',
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        $ref: '#/components/categoryComponents/category',
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
                                example: 'Category not found',
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
            tags: ['Category'],
            summary: 'Update a category',
            parameters: [
                {
                    in: 'body',
                    required: true,
                    name: 'body',
                    schema: {
                        required: ['name', 'sort', 'active', 'showFirstLevel'],
                        properties: {
                            name: {
                                type: 'string',
                                example: 'category 1',
                            },
                            sort: {
                                type: 'number',
                                example: '1',
                            },
                            active: {
                                type: 'boolean',
                                example: true,
                            },
                            parent: {
                                type: 'string',
                                example: '6324131d2ee1b300bce41533',
                            },
                            showFirstLevel: {
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
                        $ref: '#/components/categoryComponents/category',
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
                                example: 'Category not found',
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
            tags: ['Category'],
            summary: 'Delete a category',
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
}

export { categoryPaths, categoryComponents }
