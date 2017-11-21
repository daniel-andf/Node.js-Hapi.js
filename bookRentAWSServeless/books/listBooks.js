'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); 

AWS.config.setPromisesDependency(require('bluebird'));
var docClient = new AWS.DynamoDB.DocumentClient();
console.log('Loading function');

module.exports.list = (event, context, callback) => {

   var params = {
    TableName : "books_aws_serverless"
    };
 
   docClient.scan(params, (err,data) =>{
        
        if(err){
            callback(err,null);
        }
        
        else{
           callback(err,{   statusCode: 200,
               			    body: JSON.stringify({
                    		books: data.Items
                })}); 
            
        }
        
    });
};
