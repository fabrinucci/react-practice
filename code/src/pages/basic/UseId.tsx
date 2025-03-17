import { HeaderLayout } from '../../layouts';

import { useId } from 'react';

export const UseId = () => {
  return (
    <HeaderLayout title='Hook useId' path='basic'>
      <h2 className='text-xl font-bold underline underline-offset-2 mb-2'>Elegir contraseña</h2>
      <PasswordField />
      <h2 className='text-xl font-bold mt-4 mb-2 underline underline-offset-2'>
        Confirmar contraseña
      </h2>
      <PasswordField />
    </HeaderLayout>
  );
};

function PasswordField() {
  const passwordHintId = useId();

  return (
    <>
      <label>
        Contraseña:
        <input
          className='block w-full p-2.5 border-2 rounded-md bg-blue-600 border-blue-500 placeholder-blue-100 text-blue-100 focus:ring-blue-400 focus:border-blue-400 outline-0'
          type='password'
          aria-describedby={passwordHintId}
        />
      </label>
      <p className='text-sm text-blue-200' id={passwordHintId}>
        La contraseña debe ser de 18 letras y contener caracteres especiales
      </p>
    </>
  );
}
