import { Link } from 'wouter';

const pages = [
  {
    name: 'Basic',
    path: '/basic',
  },
  {
    name: 'Intermediate',
    path: '/intermediate',
  },
  {
    name: 'Advanced',
    path: '/advanced',
  },
];

export const Home = () => {
  return (
    <main className='p-20'>
      <ul className='flex justify-center gap-6 text-xl'>
        {pages.map(({ name, path }) => (
          <li className='border-b-2 border-white' key={name}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
