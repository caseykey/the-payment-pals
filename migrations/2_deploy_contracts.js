const PaymentHub = artifacts.require("PaymentHub");

module.exports = function(deployer) {
  deployer.deploy(PaymentHub);
};
