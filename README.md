# Blockchain Voting App
A decentralized voting application built on the Ethereum blockchain
Using truffle framework and gananche

## How To Use
First you need to open truffle console using ganache network then run instance
Simply you can run the ganache-cli.sh
```
./ganache-cli.sh
truffle(ganache)> Voting.deployed().then(function(instance) {VotingContract = instance;})
```
Here to get total number of candidate
```
truffle(ganache)> VotingContract.getNumOfCandidates()
```
Here to add candidate
```
truffle(ganache)> VotingContract.addCandidate("Paslon1","Jokowi & Maruf")
truffle(ganache)> VotingContract.addCandidate("Paslon2","Prabowo & Sandi")
truffle(ganache)> VotingContract.addCandidate("Paslon3","Nurhadi & Aldo")
```
To add vote change the {User-ID} using unique id for example you can use your National ID likes 34562342345353320001 and
change the {Candidate-ID} with the candidate id you want to vote example for Nurhadi & Aldo you can use id 3
```
truffle(ganache)> VotingContract.votes({User-ID}, {Candidate-ID})
```
Here get total votes of any candidate. You can change the {Candidate-ID} to 3 if you want to get information about total votes for Nurhadi & Aldo (Candidate 3)
```
truffle(ganache)> VotingContract.totalVotes({Candidate-ID})
```
To get candidate information you can change the {Candidate-ID} to 3 if you want to get candidate information, including its ID, name, and partys of Nurhadi & Aldo (Candidate 3)
```
truffle(ganache)> VotingContract.getCandidate({Candidate-ID})
```

## Referense
- [Time-locked Wallets: A Truffle Framework Tutorial | Toptal](https://www.toptal.com/ethereum-smart-contract/time-locked-wallet-truffle-tutorial)
- [Truffle Documentation](https://truffleframework.com/docs/truffle/overview)
- [web3-eth Documentation](https://web3js.readthedocs.io/en/1.0/web3-eth.html)
