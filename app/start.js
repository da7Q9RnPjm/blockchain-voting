const artifacts = require('./build/contracts/Voting.json')
const contract = require('truffle-contract')
const VotingContract = contract(artifacts);
VotingContract.setProvider(web3.currentProvider);

VotingContract.deployed()
.then(function(instance) {
  console.log(instance.address)
})
.catch(function(error) {
  console.error(error)
})