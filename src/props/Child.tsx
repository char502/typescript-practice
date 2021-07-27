interface ChildProps {
  color: string;
  onClick: () => void;
  children: unknown; //only required if define react component in ts as type 1
}


// Type 1
export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  )
};

// Type 2
// do not need to explicitly define children prop with this approach
export const ChildAsFC: React.FC <ChildProps> = ({color, onClick}) => {
  return (
    <div>
        {color}
        <button onClick={onClick}>Click me</button>
    </div>
  )
};