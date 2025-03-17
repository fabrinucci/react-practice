import { ReturnBtn } from '../components/buttons/ReturnBtn';
import { ItemsList } from '../components/ItemsList';
import { BasicList } from '../data/list';

export const BasicPage = () => {
  return (
    <main>
      <ItemsList type='basic' list={BasicList} />

      <div className='mt-10'>
        <ReturnBtn />
      </div>
    </main>
  );
};
