import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import web3 from 'web3';
import Color from '../../../packages/web3/build/contracts/Color.json';
import CreateColorButton from '../components/CreateColorButton';
import UserColors from '../components/UserColors';
import ColorType from '../types/Color';

const Home: NextPage = () => {
  const [account, setAccount] = useState('');
  const [colorContract, setColorContract] = useState<any>(null);
  const [userColors, setUserColor] = useState<ColorType[]>([]);

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

  const getAllColors = async () => {
    if (colorContract) {
      const allColors = await colorContract.methods.getAllColors().call();
      // TODO filter for user
      setUserColor(allColors);
    }
  };

  const load = async () => {
    await loadWeb3();
    await loadBlockchainData();
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    getAllColors();
  }, [colorContract]);

  return (
    <div>
      <UserColors colors={userColors} />
      <CreateColorButton />
    </div>
  );
};

export default Home;
