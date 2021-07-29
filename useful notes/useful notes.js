npx create-react-app <appname> --template typescript


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
// Child.displayName for example (which is available to React components) will not work

// Adding a click handler example (also showing an alternative way to use ts in react):

interface ChildProps {
  color: string;
  onClick: () => void; // do not expect to get any usable value from onClick
}

// ====================================
// if define a React component this way will have to explicity define a 'children' property in 
// in ChildProps
// ====================================
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  )
};

// ====================================
// Alternative way to use ts in react 
// Another advantage of this way is that it regognises the 'children' prop
// can  define components that will receive children
// ====================================
export const ChildAsFC: React.FC <ChildProps> = ({color, onClick}) => {
  return (
    <div>
        {color}
        <button onClick={onClick}>Click me</button>
    </div>
  )
};