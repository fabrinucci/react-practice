import { type ChangeEvent, useState } from 'react';
import { HeaderLayout } from '../../layouts';

export const ControlledComponent = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value); // Actualizar el estado con el valor del input
  };

  return (
    <HeaderLayout title='Formulario Controlado' path='intermediate'>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-medium text-blue-100'>Ingresa el input</label>
        <input
          type='text'
          className='block w-full p-2.5 border-2 rounded-md bg-blue-600 border-blue-500 placeholder-blue-100 text-blue-100 focus:ring-blue-400 focus:border-blue-400 outline-0'
          placeholder='Tu texto'
          value={value} // El valor del input está controlado por el estado
          onChange={handleChange} // Manejar cambios en el input
        />
      </div>
      <p className='text-sm font-medium text-blue-100'>Valor actual: {value}</p>
    </HeaderLayout>
  );
};
