var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
  var electionInstance;
	
  it("initializes with six candidates", function() {
    return Election.deployed().then(function(instance) {
      return instance.candidatesCount();
    }).then(function(count) {
      assert.equal(count, 6);
    });
  });

  it("it initializes the candidates with the correct values", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.candidates(1);
    }).then(function(candidate) {
      assert.equal(candidate[0], 1, "contains the correct id");
      assert.equal(candidate[1], "Mr. Blue", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
      return electionInstance.candidates(2);
    }).then(function(candidate) {
      assert.equal(candidate[0], 2, "contains the correct id");
      assert.equal(candidate[1], "Mr. White", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
      return electionInstance.candidates(3);
    }).then(function(candidate) {
      assert.equal(candidate[0], 3, "contains the correct id");
      assert.equal(candidate[1], "Mr. Orange", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
      return electionInstance.candidates(4);
    }).then(function(candidate) {
      assert.equal(candidate[0], 4, "contains the correct id");
      assert.equal(candidate[1], "Mr. Pink", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
      return electionInstance.candidates(5);
    }).then(function(candidate) {
      assert.equal(candidate[0], 5, "contains the correct id");
      assert.equal(candidate[1], "Mr. Blonde", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
      return electionInstance.candidates(6);
    }).then(function(candidate) {
      assert.equal(candidate[0], 6, "contains the correct id");
      assert.equal(candidate[1], "Mr. Brown", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
    })
    ;
  });

});