import { ReturnBtn } from '../components/buttons/ReturnBtn';
import { ItemsList } from '../components/ItemsList';
import { IntermediateList } from '../data/list';

export const IntermediatePage = () => {
  return (
    <main>
      <ItemsList type='intermediate' list={IntermediateList} />

      <div className='mt-10'>
        <ReturnBtn />
      </div>
    </main>
  );
};
