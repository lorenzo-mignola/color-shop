pragma solidity 0.8.11;

contract Color {
    mapping(string => address) public colorToOwner;

    event ColorBought(string indexed color, address _buyer);

    function buyColor(string calldata _color) external payable {
        require(colorAvailable(_color), "Color already bought");
        colorToOwner[_color] = msg.sender;
    }

    function colorAvailable(string memory _color) public view returns (bool) {
        return colorToOwner[_color] == address(0);
    }
}
