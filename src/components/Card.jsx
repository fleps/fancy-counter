import { useEffect, useState } from 'react';
import Count from './Count';
import ResetButton from './ResetButton';
import Title from './Title';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';

const Card = () => {
  const [count, setCount] = useState(0);
  const limit = 5;
  const locked = count === limit ? true : false;

  useEffect(() => {
    const handleSpacePress = e => {
      if (e.code === 'Space' && e.target.localName !== 'button' && count < limit) {
        setCount(count + 1);
      }
    };

    window.addEventListener('keydown', handleSpacePress);

    return () => {
      window.removeEventListener('keydown', handleSpacePress);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <div className='button-container'>
        <MinusButton locked={locked} setCount={setCount} />
        <PlusButton locked={locked} setCount={setCount} />
      </div>
    </div>
  );
};

export default Card;
