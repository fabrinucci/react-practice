import { ComponentType, FC } from 'react';

interface WithLoadingProps {
  isLoading: boolean;
}

function withLoading<P extends object>(Component: ComponentType<P>): FC<P & WithLoadingProps> {
  const WrappedComponent: FC<P & WithLoadingProps> = ({ isLoading, ...props }) => {
    return isLoading ? <p>Cargando...</p> : <Component {...(props as P)} />;
  };

  return WrappedComponent;
}

function MyComponent({ message }: { message: string }) {
  return <p>{message}</p>;
}

const MyComponentWithLoading = withLoading(MyComponent);

export function HOC() {
  return (
    <div>
      <MyComponentWithLoading isLoading={true} message='Hola, mundo' />
      <MyComponentWithLoading isLoading={false} message='Hola, mundo' />
    </div>
  );
}
