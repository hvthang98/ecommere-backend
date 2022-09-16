import swaggerUI from 'swagger-ui-express'
import components from './components.js'
import paths from './paths.js'

const config = {
    swagger: '2.0',
    info: {
        version: '1.0.0',
        title: 'Ecommerce Mern',
        description: 'Project Application API',
        license: {},
    },
    // host: '',
    basePath: '/',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
}

const swaggerDocument = {
    ...config,
    components,
    paths,
}

const swagger = (app) => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
}

export default swagger
