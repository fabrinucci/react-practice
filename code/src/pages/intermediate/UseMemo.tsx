import { useMemo, useState } from 'react';

export const UseMemo = () => {
  return (
    <div className='max-w-sm mx-auto'>
      <h1 className='font-bold text-2xl text-center text-blue-200 mb-6'>Hook UseMemo</h1>
      <CounterWithoutMemo />
      <CounterMemo />
    </div>
  );
};

export const CounterWithoutMemo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // Cálculo costoso (simulado con un bucle)
  const expensiveCalculation = () => {
    console.log('Calculando...'); // Esto se ejecutará en cada renderizado
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  };

  const result = expensiveCalculation();

  return (
    <div className='bg-orange-600 rounded-lg p-6 mb-4'>
      <h2 className='mb-4 text-center font-bold text-xl'>Contador sin useMemo</h2>
      <div className='flex flex-col gap-2'>
        <p>Resultado del cálculo: {result}</p>
        <p>Contador: {count}</p>
        <button
          className='text-white bg-violet-700 hover:bg-violet-800 cursor-pointer focus:outline-none focus:ring-4 focus:ring-violet-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2'
          onClick={() => setCount(count + 1)}
        >
          Incrementar contador
        </button>
        <input
          className='w-full text-sm bg-transparent border-0 border-b-2 text-white border-orange-300 focus:outline-none focus:ring-0 focus:border-orange-200'
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Escribe algo'
        />
      </div>
    </div>
  );
};

export const CounterMemo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // Cálculo costoso (simulado con un bucle)
  const expensiveCalculation = () => {
    console.log('Calculando...'); // Esto se ejecutará en cada renderizado
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  };

  const result = useMemo(() => expensiveCalculation(), []);

  return (
    <div className='bg-orange-600 rounded-lg p-6 mb-4'>
      <h2 className='mb-4 text-center font-bold text-xl'>Contador con useMemo</h2>
      <div className='flex flex-col gap-2'>
        <p>Resultado del cálculo: {result}</p>
        <p>Contador: {count}</p>
        <button
          className='text-white bg-violet-700 hover:bg-violet-800 cursor-pointer focus:outline-none focus:ring-4 focus:ring-violet-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2'
          onClick={() => setCount(count + 1)}
        >
          Incrementar contador
        </button>
        <input
          className='w-full text-sm bg-transparent border-0 border-b-2 text-white border-orange-300 focus:outline-none focus:ring-0 focus:border-orange-200'
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Escribe algo'
        />
      </div>
    </div>
  );
};
