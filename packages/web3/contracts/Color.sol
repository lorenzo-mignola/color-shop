pragma solidity 0.8.11;

contract Color {
    mapping(string => address) public colorToOwner;

    event ColorBought(string indexed color, address _buyer);

    function buyColor(string calldata _color) external {
        colorToOwner[_color] = msg.sender;
    }
}
