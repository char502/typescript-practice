
No JSX - use '.ts'

Will the file contain a React component, or any kind of JSX? - use '.tsx'

// Typescript will complain if don't use this rule


// Passing props

Two big checks by Typescript:

1. Are we providing the correct props to Child when we show it in Parent?

2. Are we using the correctly named + typed props in Child?

// ==============================================================
Define ts props in a component

// Child

interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return (
    <div>
      Hi there! {color}
    </div>
  )
};

// Parent

import { Child } from './Child';

const Parent = () => {
  return <Child color='red' />;
};

export default Parent;

// The problem with this is that TypeScript does not know that this is a react component so 

Child.displayName for example (which is available to React components) will not work