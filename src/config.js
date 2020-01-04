export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'jcastaneyra-notes-app-uploads'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://hfa5qsad64.execute-api.us-east-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_K8QtiPt68',
    APP_CLIENT_ID: '33d5m6ifh8r3j09vnalrgkohgr',
    IDENTITY_POOL_ID: 'us-east-1:fec438c6-80dc-47ff-865f-54165e2c3a3f'
  }
};
