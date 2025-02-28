import { Link } from 'wouter';

export const ReturnBtn = () => {
  return (
    <Link
      to='/'
      className='my-6 bg-sky-300 font-bold text-blue-900 block rounded-2xl w-40 p-3 text-center'
    >
      Return Home
    </Link>
  );
};
