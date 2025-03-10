import React, { useCallback, useState } from 'react';
import { HeaderLayout } from '../../layouts';

export const UseCallback = () => {
  return (
    <HeaderLayout title='Hook useCallback' path='intermediate'>
      <CounterWithoutCallback />
      <CounterCallback />
    </HeaderLayout>
  );
};

const ChildComponent = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log('ChildComponent se ha renderizado');
  return (
    <button
      className='text-white bg-rose-700 hover:bg-rose-800 cursor-pointer focus:outline-none focus:ring-4 focus:ring-violet-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2'
      onClick={onClick}
    >
      Haz click
    </button>
  );
});

export const CounterWithoutCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Botón clickeado');
  };

  return (
    <div className='bg-orange-600 rounded-lg p-6 mb-4'>
      <h2 className='mb-4 text-center font-bold text-xl'>Contador sin useCallback</h2>
      <div className='flex flex-col gap-2'>
        <p>Contador: {count}</p>
        <button
          className='text-white bg-violet-700 hover:bg-violet-800 cursor-pointer focus:outline-none focus:ring-4 focus:ring-violet-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2'
          onClick={() => setCount(count + 1)}
        >
          Incrementar contador
        </button>
        <ChildComponent onClick={handleClick} />
      </div>
    </div>
  );
};

export const CounterCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Botón clickeado');
  }, []);

  return (
    <div className='bg-orange-600 rounded-lg p-6 mb-4'>
      <h2 className='mb-4 text-center font-bold text-xl'>Contador con useCallback</h2>
      <div className='flex flex-col gap-2'>
        <p>Contador: {count}</p>
        <button
          className='text-white bg-violet-700 hover:bg-violet-800 cursor-pointer focus:outline-none focus:ring-4 focus:ring-violet-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2'
          onClick={() => setCount(count + 1)}
        >
          Incrementar contador
        </button>
        <ChildComponent onClick={handleClick} />
      </div>
    </div>
  );
};
