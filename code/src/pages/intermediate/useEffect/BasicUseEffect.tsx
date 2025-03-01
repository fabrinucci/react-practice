import { useEffect } from 'react';

export const BasicUseEffect = () => {
  useEffect(() => {
    console.log('El componente se ha montado');

    return () => {
      console.log('El componente se ha desmontado');
    };
  }, []);

  return <div>Montado y desmontado de componentes</div>;
};
