import { ReturnBtn } from '../components/buttons/ReturnBtn';
import { ItemsList } from '../components/ItemsList';

export const BasicPage = () => {
  return (
    <main>
      <ItemsList type='basic' list={[]} />

      <div className='mt-10'>
        <ReturnBtn />
      </div>
    </main>
  );
};
