import { useEffect } from 'react';
import { HeaderLayout } from '../../../layouts/HeaderLayout';

export const EventSuscribe = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log('La ventana se ha redimensionado');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HeaderLayout title='Suscripción a Evento' path='intermediate'>
      <p>Abre la consola y redimensiona la ventana</p>
    </HeaderLayout>
  );
};
