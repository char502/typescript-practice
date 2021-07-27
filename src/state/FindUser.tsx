import React, { useState } from 'react';

const FindUser: React.FC = () => {
  const [user, setUser] = useState<string>('');

  // const [userDetails, setUserDetails] = useState();

  const handleFind = () => {
    console.log(user)

    // const cCase = user.charAt(0).toUpperCase().concat(user.slice(1))
    // const cCase = user.charAt(0).toUpperCase()
    
    // .concat(user.slice(1))

    // console.log(cCase);

    // const other = user.slice(1)

    // const final = cCase.concat(other)

    // console.log(cCase)

    // console.log(other)

    // console.log(final);

    

    const person = userArr.find((p) => p.Name.toLowerCase() === user.toLowerCase() )

    console.log(person?.id);
  }

  return (
    <div>
      <div>
        <input type='text' value={user} onChange={(e) => setUser(e.target.value)}/>
        <button onClick={handleFind}>Find</button>
      </div>

      <div>
        <h3>User Details</h3>
      </div>
    </div>
  );
};

export default FindUser;

const userArr = [
  {
    id: 1,
    Name: 'Sarah',
    Age: 20
  },
  {
    id: 2,
    Name: 'Andrew',
    Age: 41
  },
  {
    id: 3,
    Name: 'Charlie',
    Age: 28
  },
  {
    id: 4,
    Name: 'Paul',
    Age: 35
  }
];
