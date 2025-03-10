import { HeaderLayout } from '../../../layouts';
import { useCounter } from '../../intermediate/useCounter';

type CounterProps = {
  counter: number;
  onIncrement: () => void;
};

export const SingleResposability = () => {
  const { counter, onIncrement } = useCounter();
  return (
    <HeaderLayout title='1. Responsabilidad Única' path='advanced'>
      <Counter counter={counter} onIncrement={onIncrement} />
    </HeaderLayout>
  );
};

const Counter = ({ counter, onIncrement }: CounterProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <p>Contador: {counter}</p>
      <button
        className='bg-blue-500 text-blue-0 hover:bg-blue-600 border-2 border-amber-200 cursor-pointer font-medium rounded-md text-sm py-2.5 text-center mt-2'
        onClick={onIncrement}
      >
        Incrementar contador
      </button>
    </div>
  );
};
