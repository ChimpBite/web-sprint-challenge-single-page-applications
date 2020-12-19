import React from 'react';

const Confirmation = (props) => {
  return (
    <div>
      <h2>Congrats! Pizza is on it's way!</h2>
      {Object.keys(props.order).map((property) => {
        return (
          <p>
            {property}: {props.order[property]}
          </p>
        );
      })}
    </div>
  );
};
export default Confirmation;
