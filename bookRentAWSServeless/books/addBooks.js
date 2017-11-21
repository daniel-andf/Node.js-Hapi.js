'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); 

AWS.config.setPromisesDependency(require('bluebird'));
var docClient = new AWS.DynamoDB.DocumentClient();
console.log('Loading function');


module.exports.add = (event, context, callback) => {
    
   var parqry={
        TableName : "books_aws_serverless",
        ScanIndexForward: false,
        Limit:1,
        ProjectionExpression :"id"
   };
   docClient.scan(parqry, (err,data) =>{
        
        if(err){
            callback(err,null);
        }
        
        else{
            var index = data.Items[0].id + 1
            const requestBody = JSON.parse(event.body);

            var params = {
            TableName : "books_aws_serverless",
                Item:{
                id: index,
                title: requestBody.title,
                author: requestBody.author,
                isrent: "No"
                    }
            };
 
            docClient.put(params, (err,data) =>{
        
            if(err){
                callback(err,{
                      statusCode: 500,
                      body: JSON.stringify({
                      message: `Unable to add the book ${requestBody.title}`
                    })
                });
            }
        
            else{
                    callback(err,{statusCode: 200,
                            body: JSON.stringify({
                            message: `Book add successfully`
                        })
                    }); 
            
                }
        
            });
            
        }
        
    });
 
   
};