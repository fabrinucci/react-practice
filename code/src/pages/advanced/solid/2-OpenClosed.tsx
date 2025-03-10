import { ButtonHTMLAttributes } from 'react';
import { HeaderLayout } from '../../../layouts';

export const OpenClosed = () => {
  return (
    <HeaderLayout title='2. Abierto/Cerrado' path='advanced'>
      <div>
        <PrimaryBtn onClick={() => alert('Solicitud Aceptada')}>Aceptar</PrimaryBtn>
        <DangerBtn onClick={() => alert('Solicitud Cancelada')}>Cancelar</DangerBtn>
      </div>
    </HeaderLayout>
  );
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border-2 border-amber-50 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const PrimaryBtn = (props: ButtonProps) => {
  return <Button className='bg-blue-600' {...props} />;
};

const DangerBtn = (props: ButtonProps) => {
  return <Button className='bg-red-600' {...props} />;
};
