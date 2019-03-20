pragma solidity >=0.4.22 <0.6.0;

contract Election {
	// Model a Candidate
	struct Candidate {
		uint id;
		string name;
		uint voteCount;
	}

	// Store Candidates
	// Fetch Candidate
	mapping(uint => Candidate) public candidates;
	// Store Candidates Count
	uint public candidatesCount;

	// Constructor
	constructor() public {
		addCandidate("Mr. Blue");
		addCandidate("Mr. White");
		addCandidate("Mr. Orange");
		addCandidate("Mr. Pink");
		addCandidate("Mr. Blonde");
		addCandidate("Mr. Brown");
	}

	function addCandidate (string memory _name) private {
		candidatesCount ++;
		candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
	}

}
