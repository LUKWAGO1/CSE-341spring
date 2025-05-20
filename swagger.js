// swagger.js
const swaggerAutogen = require('swagger-autogen')();
const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts information'
  },
  host: 'localhost:3000',
  schemes: ['http', 'https'],
  tags: [
    {
      name: 'Contacts',
      description: 'Endpoints for managing contacts'
    }
  ],
  definitions: {
    Contact: {
      firstName: 'Paul',
      lastName: 'Lukwago',
      email: 'paullukwago@gmail.com',
      favoriteColor: 'blue',
      birthday: '1999-01-01'
    },
    ContactInput: {
      $firstName: 'John',
      $lastName: 'daniel',
      $email: 'johndaniel@gmail.com',
      $favoriteColor: 'blue',
      $birthday: '1995-08-01'
    },
    ContactResponse: {
      _id: '682274ddd0a5b29bade88762',
      firstName: 'edward',
      lastName: 'yawe',
      email: 'edwardyawe@gmail.com',
      favoriteColor: 'blue',
      birthday: '2000-01-21'
    },
    NewContactResponse: {
      id: '682274ddd0a5b29bade88762',
      message: 'Contact created successfully'
    },
    Error: {
      error: 'Error message',
      message: 'Detailed error information'
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);