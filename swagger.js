const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ricky Vang API for Week 5',
      version: '1.0.0',
      description: 'API documentation for your Node.js application',
    },
  },
  apis: ['./routes/*.js'], // Path to the API routes
};
const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;