import { Button } from 'evergreen-ui';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getRandomColor } from '../api';

const CreateColorButton = () => {
  const [clicked, setClicked] = useState(false);
  console.log('clg -> CreateColorButton -> clicked', clicked);
  const router = useRouter();

  const { data: newColor, remove } = useQuery('newColor', getRandomColor, {
    enabled: clicked
  });

  useEffect(() => {
    setClicked(false);

    return () => {
      setClicked(false);
    };
  }, []);

  useEffect(() => {
    if (newColor) {
      router.push(`/color/${newColor.replace('#', '')}`);
      remove();
    }
  }, [newColor, router, remove]);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          margin: 3rem 0;
        }
      `}</style>
      <div>
        <Button appearance='primary' onClick={handleClick} disabled={clicked}>
          Generate color
        </Button>
      </div>
    </>
  );
};

export default CreateColorButton;
