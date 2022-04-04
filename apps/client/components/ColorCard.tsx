interface Props {
  color: string;
}

const ColorCard = ({ color }: Props) => {
  return (
    <>
      <style jsx>{`
        .color__card {
          margin: 3rem;
          padding: 3rem;
          border-radius: 8px;
          box-shadow: 30px 30px 69px 8px ${color}55;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .color__circle {
          margin: 1rem;
          height: 8rem;
          width: 8rem;
          border-radius: 50%;
          background-color: ${color};
        }
      `}</style>
      <div className='color__card'>
        <h3>{color}</h3>
        <div className='color__circle'></div>
      </div>
    </>
  );
};

export default ColorCard;
