import { Link } from 'wouter';
import { ReturnBtn } from '../buttons/ReturnBtn';

export const AdvancedPage = () => {
  return (
    <main>
      <ul>
        <li>
          <Link to='/advanced/usetransition'>useTransition</Link>
        </li>
      </ul>

      <div className='mt-4'>
        <ReturnBtn />
      </div>
    </main>
  );
};
