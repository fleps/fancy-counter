import { PlusIcon } from '@radix-ui/react-icons';

const PlusButton = ({ locked, setCount }) => {
  const increaseCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <button disabled={locked} type='button' className='count-btn count-btn--plus' onClick={increaseCount}>
      <PlusIcon className='count-btn-icon' />
    </button>
  );
};

export default PlusButton;
