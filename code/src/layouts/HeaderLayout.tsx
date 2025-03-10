import { ReactNode } from 'react';
import { ComeBackBtn } from '../components/buttons/ComeBackBtn';
import { Path } from '../types';

type LayoutProps = {
  children: ReactNode;
  title: string;
  path?: Path;
};

export const HeaderLayout = ({ children, title, path }: LayoutProps) => {
  return (
    <header className='max-w-md mx-auto'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='font-bold text-2xl text-center text-blue-200'>
          {title || 'Component title'}
        </h1>
        <ComeBackBtn path={path || ''} />
      </div>
      {children}
    </header>
  );
};
