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
    <div className="flex flex-col items-center mb-6 mt-5" >
        <header className="mb-4">
          <h2 className="text-center text-xl font-semibold text-indigo-700 ">จำนวนผู้เข้าร่วม</h2>
          <p className="mt-1 text-sm text-indigo-500">กรอกจำนวนผู้เข้าร่วมการแข่งขัน </p>
        </header>
            
    <input className='w-full max-w-md rounded-2xl border border-indigo-200 bg-gradient-to-br from-white via-indigo-30 to-white p-6 shadow-lg shadow-indigo-100/10'
      type="number"
      value={value}
      onClick={handleClick}
      onChange={handleChange}
      min="0" // Optional: set minimum value
      max="100" // Optional: set maximum value
      step="1" // Optional: set step increment/decrement
    />
    </div>
        
  );
}

