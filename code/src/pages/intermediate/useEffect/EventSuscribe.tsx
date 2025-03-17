import { useEffect, useState } from 'react';
import { HeaderLayout } from '../../../layouts';

export const EventSuscribe = () => {
  return (
    <HeaderLayout title='Suscripción a eventos' path='intermediate'>
      <WindowSize />
    </HeaderLayout>
  );
};

function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Ancho: {size.width}px</p>
      <p>Alto: {size.height}px</p>
    </div>
  );
}
