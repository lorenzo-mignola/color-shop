import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import BuyColor from '../../components/BuyColor';
import ColorCard from '../../components/ColorCard';
import colorState from '../../state/colorState';

const ColorPage = () => {
  const router = useRouter();
  const [color, setColor] = useRecoilState(colorState);
  const { colorString } = router.query;

  useEffect(() => {
    if (colorString) {
      setColor(`#${colorString as string}`);
    }
    return () => {
      setColor('');
    };
  }, []);

  return color ? (
    <>
      <ColorCard color={color} />
      <BuyColor />
    </>
  ) : null;
};

export default ColorPage;
