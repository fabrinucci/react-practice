import { ButtonHTMLAttributes, LinkHTMLAttributes } from 'react';
import { HeaderLayout } from '../../../layouts';

export const LiskovSubstitution = () => {
  return (
    <HeaderLayout title='3. Substitución de Liskov' path='advanced'>
      <div>
        <Button onClick={() => alert('Boton Clickeado')}>Click</Button>
        <LinkButton href='https://www.google.com'>Ir a google</LinkButton>
      </div>
    </HeaderLayout>
  );
};

const Button = ({ onClick, children }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      onClick={onClick}
      className='font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border-2 border-amber-50 cursor-pointer bg-violet-600'
    >
      {children}
    </button>
  );
};

const LinkButton = ({ href, children }: LinkHTMLAttributes<HTMLLinkElement>) => {
  return (
    <a
      href={href}
      className='font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border-2 border-amber-50 cursor-pointer bg-sky-600'
    >
      {children}
    </a>
  );
};
