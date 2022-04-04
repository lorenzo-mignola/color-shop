import { Button } from 'evergreen-ui';
import { useQuery } from 'react-query';
import { getRandomColor } from '../api';

const CreateColorButton = () => {
  const { data: newColor } = useQuery('newColor', getRandomColor);

  const handleClick = () => {
    console.log('clg', newColor);
  };

  return (
    <>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          margin: 6rem 0;
        }
      `}</style>
      <div>
        <Button appearance='primary' onClick={handleClick}>
          Generate color
        </Button>
      </div>
    </>
  );
};

export default CreateColorButton;
