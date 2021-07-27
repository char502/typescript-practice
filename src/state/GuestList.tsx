import React, { useState } from 'react';

// interface GuestListProps {
//   event: Event | null;
// }

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  // without type TS will assume this array will be forever empty
  // the type entered now is string[] which means an array of strings
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    

    // take everything out of guests, add it to a new array, then add on name to the end
    // never[] means Typescript has no idea what kind of value is going to be present inside that array
    // setGuests([...guests, name]);

    setGuests([...guests, name]);

    setName('');
  };

  return (
    <div>
      <div>
        <h3>Party Guest List</h3>
        <ul>
          {guests.map((guest) => (
            <li key={guest}>{guest}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={onClick}>Add Guest</button>
      </div>
    </div>
  );
};

export default GuestList;
