import React, { useState, useRef, useEffect } from 'react';

export interface UserProps {
  id: number;
  name: string;
  age: number;
}

export const UserSearchRefs: React.FC = () => {
  // accounting for the fact that the ref might not be used (react insists on this check)
  let inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<UserProps | undefined>();

  useEffect(() => {
    // making sure the ref is actually a defined value (not null) and pointing to a html element
    // This is referred to a type guard, 
    if (!inputRef.current) {
      return;
    }
    // if the code then gets this far it knows the input element actually exists
    inputRef.current.focus();
  }, []);

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
          ref={inputRef}
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

export default UserSearchRefs;

export const users = [
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
