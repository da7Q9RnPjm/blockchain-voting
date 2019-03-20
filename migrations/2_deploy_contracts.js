var AppDescription = artifacts.require("./AppDescription.sol");
var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
    deployer.deploy(AppDescription)
    deployer.deploy(Voting)
};