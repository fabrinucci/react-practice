import { Link } from 'wouter';
import { ArrowRight } from './icons/ArrowRight';
interface ItemsProps {
  type: 'basic' | 'intermediate' | 'advanced';
  list: string[];
}

export const ItemsList = ({ type, list }: ItemsProps) => {
  return (
    <ul className='w-60 text-base font-medium text-gray-900 bg-blue-200 rounded-md'>
      {list.map((item) => (
        <li
          key={item}
          className='w-full px-4 py-2 border-b-2 border-blue-700 last-of-type:border-none hover:bg-blue-300 rounded-md hover:rounded-md transition-all'
        >
          <Link className='flex justify-between' to={`/${type}/${item}`}>
            <p className='text-blue-800'>{item}</p>
            <ArrowRight />
          </Link>
        </li>
      ))}
    </ul>
  );
};
