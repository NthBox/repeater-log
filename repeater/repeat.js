'use strict';

const request = require('request')

const store = require('./log.js');

module.exports.repeat = (event, context, callback) => {

  request({
    url: '',
    method: 'POST',
    headers: {'content-type' : 'application/json'},
    body: event.body
    }, function(error, response, body){
      var body = JSON.parse(body)
      console.log('body',body)

      const response = {
        statusCode: 200,
        body: body
      };
      callback(null, response);
    }
  );
  store.saveRequest(event.body)
};