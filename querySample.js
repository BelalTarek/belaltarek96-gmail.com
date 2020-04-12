var { GraphQLClient } = require('graphql-request');

const client = new GraphQLClient('http://hashura.stage.platform.raseedy.io/v1/graphql', {
    headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': 'nY2TBtObuB2b^]xX',
    },
})


const query = `query MyQuery {
    BranchList {
      branchAddress
      branchId
      branchManagerId
      branchName
      city
      createdBy
      createdTs
      landline
      latitude
      longitude
    }
  }`

  client.request(query)
    .then(data => console.log(data))
    .catch(error => console.error(error));