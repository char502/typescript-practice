import ReactDOM from 'react-dom';
import FindUser from './state/FindUser';
// import GuestList from './state/GuestList';
// import Parent from './props/Parent';

const App = () => {
  return (
    <div>
      <FindUser />
      {/* <GuestList /> */}
     {/* <Parent /> */}


    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
