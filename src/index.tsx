import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
// import Parent from './props/Parent';

const App = () => {
  return (
    <div>
      <GuestList />
     {/* <Parent /> */}


    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
