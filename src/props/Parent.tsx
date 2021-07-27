import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <>
      <Child color='red' onClick={() => console.log('Clicked')} />

      <ChildAsFC color='red' onClick={() => console.log('ts test')} />
    </>
  );
};

export default Parent;
