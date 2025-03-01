import { useEffect, useState } from 'react';

type User = {
  name: string;
  email: string;
};

export const CancelRequest = () => {
  return <CancelApi userId={4} />;
};

export const CancelApi = ({ userId }: { userId: number }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Crear un AbortController
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          {
            signal: abortController.signal, // Pasar la señal al fetch
          }
        );
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            console.log('La solicitud fue cancelada con AbortError');
          } else {
            setError(error);
            setLoading(false);
          }
        }
      }
    };

    fetchData();

    // Función cleanup
    return () => {
      abortController.abort();
    };
  }, [userId]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {user && (
        <>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
};
