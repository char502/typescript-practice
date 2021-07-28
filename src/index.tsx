import ReactDOM from 'react-dom';
import EventComponent from './events/EventComponent';
// import UserSearch from './state/UserSearch';
// import GuestList from './state/GuestList';
// import Parent from './props/Parent';

const App = () => {
  return (
    <div>
      <EventComponent />
      {/* <UserSearch /> */}
      {/* <GuestList /> */}
      {/* <Parent /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
