import React from 'react';

const EventComponent: React.FC = () => {
  // 1. The type inference system is not applied if we define the function ahead of time (need to explicitly say what type it is)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
    console.log('im being dragged');
  };

  return (
    <div>
      {/* 2. Only if applied directly inline */}
      <input onChange={handleChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
