var { GraphQLClient } = require('graphql-request');

const client = new GraphQLClient('http://hashura.stage.platform.raseedy.io/v1/graphql', {
    headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': 'nY2TBtObuB2b^]xX',
    },
})

const query = `mutation MyMutation($branch: RSDY_BRANCH_insert_input!) {
    BranchAdd(objects: [$branch]) {
      __typename
    }
  }`

//Branch object Sample to test "addBranch"
const objects = {
    branch: {
        "branchId": "dcf5f622-1fa6-4151-8d61-0f0f84f5fc57",
        "latitude": 30.31,
        "longitude": 31.30,
        "branchAddress": "el beet 3nde",
        "branchName": "Roksy",
        "city": "Alex"
    }
}

client.request(query,objects)
    .then(data => console.log(data))
    .catch(error => console.error(error));