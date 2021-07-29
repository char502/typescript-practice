import ReactDOM from 'react-dom';
import UserSearchRefs from './refs/UserSearchRefs';
// import EventComponent from './events/EventComponent';
// import UserSearch from './classes/UserSearch';
// import UserSearch from './state/UserSearch';
// import GuestList from './state/GuestList';
// import Parent from './props/Parent';
// import { users } from './state/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearchRefs />
      {/* <EventComponent /> */}
      {/* <UserSearch users={users} /> */}
      {/* <UserSearch /> */}
      {/* <GuestList /> */}
      {/* <Parent /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
