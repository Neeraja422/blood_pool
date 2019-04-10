var donor = artifacts.require("../contracts/donor.sol");

module.exports = function(deployer) {
  deployer.deploy(donor);
};
