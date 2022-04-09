import { Button } from 'evergreen-ui';

const BuyColor = () => {
  return (
    <>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
        }
      `}</style>
      <div>
        <Button appearance='primary' height={70}>
          <h3>Buy color</h3>
        </Button>
      </div>
    </>
  );
};

export default BuyColor;
