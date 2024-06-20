const Title = ({ locked }) => {
  return !locked ? (
    <>
      <h1 className='title'>Fancy Counter</h1>
      <span>Free version</span>
    </>
  ) : (
    <>
      <h1 className='title'>Limit Reached!</h1>
      <span>Reset or buy the PRO version!</span>
    </>
  );
};
export default Title;
