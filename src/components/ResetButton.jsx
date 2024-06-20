import { ResetIcon } from '@radix-ui/react-icons';

const ResetButton = ({ setCount }) => {
  const resetCount = e => {
    setCount(0);
    e.currentTarget.blur();
  };
  return (
    <button type='button' className='reset-btn' onClick={resetCount}>
      <ResetIcon className='reset-btn-icon' />
    </button>
  );
};

export default ResetButton;
