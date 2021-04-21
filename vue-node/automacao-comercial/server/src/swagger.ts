const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
    info: {
        title: 'API automacaoComercial',
        version: '1.0.0',
    },
    host: 'localhost:3000',
    basePath: '/',
}

const options = {
    swaggerDefinition: swaggerDefinition,
    apis: [
        
    ],
}

export const swaggerSpec = swaggerJSDoc(options)
