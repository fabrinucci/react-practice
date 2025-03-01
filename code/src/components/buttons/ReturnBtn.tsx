import { Link } from 'wouter';

export const ReturnBtn = () => {
  return (
    <Link
      to='/'
      className='text-blue-900 bg-orange-200 hover:bg-orange-300 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none'
    >
      Return Home
    </Link>
  );
};
