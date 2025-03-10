import { Link } from 'wouter';
import { PathProps } from '../../types';

export const ComeBackBtn = ({ path }: PathProps) => {
  return (
    <Link
      to={`/${path}`}
      className='text-blue-900 bg-orange-300 hover:bg-orange-300 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-8 py-2.5 focus:outline-none'
    >
      Volver
    </Link>
  );
};
