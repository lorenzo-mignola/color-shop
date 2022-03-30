import { Button } from 'evergreen-ui';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import web3 from 'web3';
//@ts-ignore
import Color from './contracts/Color.json';

const Home: NextPage = () => {
  const [account, setAccount] = useState('');
  const [colorContract, setColorContract] = useState<any>(null);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new web3(window.web3.currentProvider);
    } else {
      window.alert('Install MetaMask');
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const networkId = await web3.eth.net.getId();
    //@ts-ignore
    const colorTokenData = Color.networks[networkId];
    if (colorTokenData) {
      setColorContract(
        new web3.eth.Contract(Color.abi as any, colorTokenData.address)
      );
    } else {
      window.alert('DappToken not deployed ');
    }
  };

  const load = async () => {
    await loadWeb3();
    await loadBlockchainData();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <Button appearance='primary'>asd</Button>
    </div>
  );
};

export default Home;
