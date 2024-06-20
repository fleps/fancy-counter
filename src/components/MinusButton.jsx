import { MinusIcon } from '@radix-ui/react-icons';

const MinusButton = ({ locked, setCount }) => {
  const decreaseCount = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <button disabled={locked} type='button' className='count-btn' onClick={decreaseCount}>
      <MinusIcon className='count-btn-icon' />
    </button>
  );
};

export default MinusButton;
