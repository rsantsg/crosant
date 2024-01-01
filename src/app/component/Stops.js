import React from 'react';

const Stop = ({ stopData }) => {
  // Assuming stopData is an object with properties related to a stop
  return (
    <div className="stop-container">
        <input type="text" id="name" name="name" required />
          <input type="text" id="description" name="description"  />
          <input type="text" id= 'trip_id' name= 'trip_id'  className='hidden' /> 
    </div>
  );
};

export default Stop;