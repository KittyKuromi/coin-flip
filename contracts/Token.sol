// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Token {
    string public name = "Coin Flip";
    string public symbol = "CFT";

    uint256 public totalSupply = 1000000;

    address public owner;

    mapping(address => uint256) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 amount);

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function _transfer(address _from, address _to, uint256 amount) internal {
        require(_from != _to, "sender and receiver should be different");
        require(balances[_from] >= amount, "Not enough Tokens");

        balances[_from] -= amount;
        balances[_to] += amount;

        emit Transfer(_from, _to, amount);
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }

    function generateRandomNumber() public view returns (uint) {
        uint timestamp = block.timestamp;
        bytes32 hash = keccak256(abi.encodePacked(timestamp));
        return uint(hash) % 10;
    }

    function bet(uint256 amount, bool isFront) external returns (bool) {
        uint randomNumber = generateRandomNumber();
        if ((randomNumber > 5 && isFront) || (randomNumber <= 5 && !isFront)) {
            _transfer(owner, msg.sender, amount);
            return true;
        } else {
            _transfer(msg.sender, owner, amount);
            return false;
        }
    }

    function transfer(address to, uint256 amount) external {
        _transfer(msg.sender, to, amount);
    }
}
