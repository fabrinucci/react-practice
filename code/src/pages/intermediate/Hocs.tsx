import { ComponentType, FC } from 'react';
import { HeaderLayout } from '../../layouts';

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
    <HeaderLayout title='High Order Components' path='intermediate'>
      <div>
        <MyComponentWithLoading isLoading={true} message='Hola, mundo' />
        <MyComponentWithLoading isLoading={false} message='Hola, mundo' />
      </div>
    </HeaderLayout>
  );
}
