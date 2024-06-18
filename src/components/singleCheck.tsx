import { useState } from 'react';

export const SingleCheck = ({ casuistica }: { casuistica: { userId: string, description: string } }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div 
      className={`border ${checked ? 'border-green-600 shadow shadow-green-300' : 'border-gray-300' }  rounded-md p-4 mt-2`}
      key={casuistica.userId}>
      <div className='flex gap-2' >
        <h4 className='text-lg font-bold py-2'>
          {casuistica.userId}
        </h4>
        <input 
          checked={checked}
          onChange={() => setChecked(!checked)}
          type='checkbox' />
      </div>
                  
      <p>
        {casuistica.description}
      </p>
    </div>
  );
}

