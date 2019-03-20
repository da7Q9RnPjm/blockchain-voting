pragma solidity >=0.4.21 <0.6.0;

contract AppDescription {
    string message;

    constructor() public {
        message = "Etherium Votting App";
    }

    function setHello(string memory _msg) public {
        message = _msg;
    }

    function getHello() public view returns (string memory) {
        return message;
    }
}