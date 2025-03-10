import { useState } from 'react';

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => setCounter(counter + 1);
  return { counter, onIncrement };
};
