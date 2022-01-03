pragma solidity 0.8.11;

contract Color {
    mapping(string => address) public colorToOwner;
    string[] private colorsBought;

    struct UserColor {
        address user;
        string color;
    }

    event ColorBought(string indexed color, address _buyer);

    function buyColor(string calldata _color) external payable {
        require(colorAvailable(_color), "Color already bought");
        colorToOwner[_color] = msg.sender;
        colorsBought.push(_color);
    }

    function colorAvailable(string memory _color) public view returns (bool) {
        return colorToOwner[_color] == address(0);
    }

    function totalSpend() external view returns (uint256) {
        return address(this).balance;
    }

    function getAllColors() external view returns (UserColor[] memory) {
        UserColor[] memory colors;

        uint256 arrayLength = 0;
        for (uint256 i = 0; i < colorsBought.length; i++) {
            string memory color = colorsBought[i];
            UserColor memory userColor = UserColor({
                user: colorToOwner[colorsBought[i]],
                color: color
            });
            colors[arrayLength] = userColor;
            arrayLength++;
        }
        return colors;
    }
}
