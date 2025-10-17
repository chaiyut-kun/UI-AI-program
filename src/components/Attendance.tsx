import React, { useState, useContext } from 'react';
import { UserDataCtx } from "../contexts/Context";
import type { UserDataContextType } from '../types/apiTypes';


export default function NumberInput() {
  const { updateAttendance } = useContext(UserDataCtx) as UserDataContextType

  const [value, setValue] = useState<number | string>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' ? '' : Number(e.target.value);
    setValue(newValue);
    if (newValue !== '') {
      updateAttendance(Number(newValue));
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    // ถ้าค่าปัจจุบันคือ 0 → ล้างค่า
    if (value === 0) {
      setValue('');
    }
  };

  return (
    <input
      type="number"
      value={value}
      onClick={handleClick}
      onChange={handleChange}
      min="0" // Optional: set minimum value
      max="100" // Optional: set maximum value
      step="1" // Optional: set step increment/decrement
    />
  );
}

