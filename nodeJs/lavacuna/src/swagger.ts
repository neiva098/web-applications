import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    info: {
        title: 'API LaVacuna service',
        version: '1.0.0',
    },
    host: process.env.HOST || 'localhost:3333',
    basePath: '/',
};

const options = {
    swaggerDefinition,
    apis: [],
};

export const swaggerSpec = swaggerJSDoc(options);
