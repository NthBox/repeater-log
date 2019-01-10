'use strict'

const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient();

function saveRequest(request, callback){
  const requestBody = JSON.parse(request);

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      request: requestBody.request,
      createAt: timestamp,
      updatedAt: timestamp
    }
  }
}

  // write the todo to the database
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t create the todo item.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(response);
  });

module.exports = {
  saveRequest:saveRequest
}