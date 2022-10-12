const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Luciano Oliveira Api de aluguéis',
      description: 'Api que registra produtos, usuarios e aluguéis de items',
      version: '1.0',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        description: 'Servidor Local',
      }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./dist/routes/*.js'],
};

export default swaggerConfig;
