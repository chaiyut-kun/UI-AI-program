import React, { useState } from 'react';

function NumberInputBasic() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <input
      type="number"
      value={value}
      onChange={handleChange}
      min="0" // Optional: set minimum value
      max="100" // Optional: set maximum value
      step="1" // Optional: set step increment/decrement
    />
  );
}


export default NumberInputBasic;