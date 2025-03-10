import { useEffect, useState } from 'react';
import { HeaderLayout } from '../../../layouts';

export const CleanUseEffect = () => {
  return (
    <HeaderLayout title='Limpiar useEffect' path='intermediate'>
      <div className='flex flex-col gap-3'>
        <CleanTimer />
        <CleanListener />
        <CleanRequest userId={2} />
      </div>
    </HeaderLayout>
  );
};

export const CleanTimer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <p className='border-b-2 border-cyan-200'>Segundos: {seconds}</p>;
};

export const CleanListener = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Función de cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='border-b-2 border-cyan-200'>
      <p>Ancho: {windowSize.width}px</p>
      <p>Alto: {windowSize.height}px</p>
    </div>
  );
};

type User = {
  name: string;
  email: string;
};

const CleanRequest = ({ userId }: { userId: number }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          signal: abortController.signal, // Pasar la señal al fetch
        });
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            console.log('La solicitud fue cancelada');
          } else {
            setError(error);
            setLoading(false);
          }
        }
      }
    };

    fetchData();

    // Función de cleanup
    return () => {
      abortController.abort();
    };
  }, [userId]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className='border-b-2 border-cyan-200'>
      {user && (
        <>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
};
