import React, { useState } from 'react';

interface UserProps {
  id: number;
  name: string;
  age: number;
}

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>('');

  const [user, setUser] = useState<UserProps | undefined>();

  const handleFind = () => {
    const foundUser = users.find(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );

    setUser(foundUser);
  };

  return (
    <div>
      <div>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleFind}>Find User</button>
      </div>

      <div>
        <h3>User Search</h3>
        {user ? (
          <div>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
          </div>
        ) : (
          <div>Not Found</div>
        )}
      </div>
    </div>
  );
};

export default UserSearch;

const users = [
  {
    id: 1,
    name: 'Sarah',
    age: 20
  },
  {
    id: 2,
    name: 'Andrew',
    age: 41
  },
  {
    id: 3,
    name: 'Charlie',
    age: 28
  },
  {
    id: 4,
    name: 'Paul',
    age: 35
  }
];
