'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); 

AWS.config.setPromisesDependency(require('bluebird'));
var docClient = new AWS.DynamoDB.DocumentClient();
console.log('Loading function');


module.exports.rent = (event, context, callback) => {
   const requestBody = JSON.parse(event.body);
   var params = {
        TableName : "books_aws_serverless",
        UpdateExpression: "set isrent =:s",
        ExpressionAttributeValues:{
            ":s":"Yes"
        },
        Key:{
            "id": requestBody.id  
        }
    };
 
   docClient.update(params, (err,data) =>{
        
        if(err){
            callback(err,{
                     statusCode: 500,
                     body: JSON.stringify({
                     message: `Unable to rent the book ${requestBody.id}`
                })
            });
        }
        
        else{
           callback(err,{
                    statusCode: 200,
                    body: JSON.stringify({
                    message: `Book successfully rented`
                 })
           }); 
            
        }
        
    });
};