import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <>
      <Child color='red' onClick={() => console.log('Clicked')}>
          dksjdhfs
              
      </Child>

      <ChildAsFC color='red' onClick={() => console.log('ts test')}>

        ddfgg
      </ChildAsFC>
    </>
  );
};

export default Parent;
