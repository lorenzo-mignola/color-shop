import Color from '../types/Color';
import ColorCard from './ColorCard';

interface Props {
  colors: Color[];
}

const UserColors = ({ colors }: Props) => {
  return (
    <>
      {colors.map(color => (
        <ColorCard color={color.color} key={color.color} />
      ))}
    </>
  );
};

export default UserColors;
