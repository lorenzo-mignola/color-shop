const Color = artifacts.require('./Color.sol');

contract('Color', accounts => {
  beforeEach(async () => {
    contractInstance = await Color.new();
  });

  it('account 0 buy color #FFFFFF', async () => {
    const [buyer] = accounts;
    const price = web3.utils.toWei('0.001', 'ether');
    const color = '#FFFFFF';
    await contractInstance.buyColor(color, {
      from: buyer,
      value: price
    });

    const accountOfColor = await contractInstance.colorToOwner(color);
    expect(accountOfColor).to.be.equal(buyer);
  });

  it('color is available', async () => {
    const defaultAccount = '0x0000000000000000000000000000000000000000';
    const color = '#000000';

    const isAvailable = await contractInstance.colorAvailable(color);
    expect(isAvailable).to.be.true;
  });
});
