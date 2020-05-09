import AWS from 'aws-sdk';

AWS.config.update({
    region: 'us-east-2',
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET
})

var docClient = new AWS.DynamoDB.DocumentClient();

export function createItem(userData) {
    var params = {
        TableName :"user-data",
        Item: userData
    };
    docClient.put(params, function(err, data) {
        if (err) {
            console.log('ERROR', err)
        } else {
            console.log('SUCCESS', data)
        }
    }); 
    
}