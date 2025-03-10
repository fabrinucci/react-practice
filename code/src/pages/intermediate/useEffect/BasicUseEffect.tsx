import { useEffect } from 'react';
import { HeaderLayout } from '../../../layouts';

export const BasicUseEffect = () => {
  useEffect(() => {
    console.log('El componente se ha montado');

    return () => {
      console.log('El componente se ha desmontado');
    };
  }, []);

  return (
    <HeaderLayout title='Uso básico de useEffect' path='intermediate'>
      <p>Montado y desmontado de componentes</p>
    </HeaderLayout>
  );
};
