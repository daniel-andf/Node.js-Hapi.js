'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); 

AWS.config.setPromisesDependency(require('bluebird'));  
var docClient = new AWS.DynamoDB.DocumentClient();
console.log('Loading function');


module.exports.delete = (event, context, callback) => {
  const requestBody = JSON.parse(event.body);
 
   var params = {
    TableName : "books_aws_serverless",
    Key: {
            id: requestBody.id
        }
    };
 
   docClient.delete(params, (err,data) =>{
        
        if(err){
            callback(err,{

                     statusCode: 500,
                     body: JSON.stringify({
                     message: `Unable to delete the book ${requestBody.title}`
                })

            });
        }
        
        else{
           callback(err,{
                    statusCode: 200,
                    body: JSON.stringify({
                    message: `Book deleted successfully`
                 })

           }); 
            
        }
        
    });
};
