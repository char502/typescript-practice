import React from 'react';

const EventComponent: React.FC = () => {

  // 1. The type inference system is not applied if we define the function ahead of time (need to explicitly say what type it is)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
       {/* 2. Only if applied directly inline */}
      <input onChange={handleChange} />
    </div>
  );
};

export default EventComponent;
