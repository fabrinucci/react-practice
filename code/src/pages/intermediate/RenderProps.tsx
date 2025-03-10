import { ReactNode } from 'react';
import { HeaderLayout } from '../../layouts';

type RenderProps = {
  render: (data: Data) => ReactNode;
};

type Data = {
  target: string;
};

function DataProvider({ render }: RenderProps) {
  const data = { target: 'render prop' };

  return (
    <HeaderLayout title='Render Props' path='intermediate'>
      {render(data)}
    </HeaderLayout>
  );
}

export const RenderProps = () => {
  return (
    <DataProvider
      render={(data: Data) => (
        <h1>
          Esto es una <b>{data.target}</b>
        </h1>
      )}
    />
  );
};
