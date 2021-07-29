import { Component } from 'react';

// import { UserProps } from '../state/UserSearch';

interface User {
  id: number;
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  };

  handleFind = () => {
    console.log(this.props);

    const foundUser = this.props.users.find(
      (user) => user.name.toLowerCase() === this.state.name.toLowerCase()
    );

    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;

    return (
      <div>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <button onClick={this.handleFind}>Find User</button>
        </div>

        <div>
          <h3>User Search</h3>
          {this.state.user ? (
            <div>
              <p>Id: {user?.id}</p>
              <p>Name: {user?.name}</p>
              <p>Age: {user?.age}</p>
            </div>
          ) : (
            <div>Not Found</div>
          )}
        </div>
      </div>
    );
  }
}

export default UserSearch;
