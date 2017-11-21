'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); 

AWS.config.setPromisesDependency(require('bluebird'));
var docClient = new AWS.DynamoDB.DocumentClient();
console.log('Loading function');


module.exports.update = (event, context, callback) => {
   const requestBody = JSON.parse(event.body);
 
   var params = {
    TableName : "books_aws_serverless",
        UpdateExpression: "set title=:s1,author=:s2,isrent =:s3",
        ExpressionAttributeValues:{
            ":s1":requestBody.title,
            ":s2":requestBody.author,
            ":s3":"No"
        },
        Key:{
            id: requestBody.id  
        }
    };
 
   docClient.update(params, (err,data) =>{
        
        if(err){
            callback(err,{
                    statusCode: 500,
                     body: JSON.stringify({
                     message: `Unable to update the book ${requestBody.title}`
                })

            });
        }
        
        else{
           callback(err,{

                    statusCode: 200,
                    body: JSON.stringify({
                    message: `Book updated successfully`
                 })

           }); 
            
        }
        
    });
};