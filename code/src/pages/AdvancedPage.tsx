import { ReturnBtn } from '../components/buttons/ReturnBtn';
import { ItemsList } from '../components/ItemsList';
import { AdvancedList } from '../data/list';

export const AdvancedPage = () => {
  return (
    <main>
      <ItemsList type='advanced' list={AdvancedList} />

      <div className='mt-10'>
        <ReturnBtn />
      </div>
    </main>
  );
};
