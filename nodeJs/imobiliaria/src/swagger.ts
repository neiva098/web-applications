import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    info: {
        title: 'API imobiliaria service',
        version: '1.0.0',
    },
    host: process.env.HOST || 'localhost:3000',
    basePath: '/',
};

const options = {
    swaggerDefinition,
    apis: [
        './dist/routes/person.js',
        './dist/routes/propertie.js',
        './dist/routes/visit.js',
    ],
};

export const swaggerSpec = swaggerJSDoc(options);
