import AWS from 'aws-sdk';

AWS.config.update({
    region: 'us-east-1',
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET
})



var docClient = new AWS.DynamoDB.DocumentClient();

var sns = new AWS.SNS()

var snsParams = {
    Message: 'New User Registered', /* required */
    MessageAttributes: {
      'STRING': {
        DataType: 'String', /* required */
        StringValue: 'New User Registered'
      },
    },
    PhoneNumber: '+17023084860'
  };
  
export function createItem(userData) {
    var params = {
        TableName :"user-data",
        Item: userData
    };
    docClient.put(params, function(err, data) {
        if (err) {
            //console.log('DB ERROR', err) 
        } else {
        //console.log('SUCCESS', data) 
        sns.publish(snsParams, function(err, data) {
            /* if (err) console.log("snsError",err, err.stack); // an error occurred
            else     console.log("snsSuccess",data); */           // successful response
          });
        }
    }); 
    
}
