import { HeaderLayout } from '../../../layouts';

export const InterfaceSegregation = () => {
  return (
    <HeaderLayout title='4. Segregación de Interfaces' path='advanced'>
      <div className='flex justify-around'>
        <ClientProfile name='Juan' purchases={4} />
        <AdminProfile name='German' permissions='Total' />
      </div>
    </HeaderLayout>
  );
};

type ClientProps = {
  name: string;
  purchases: number;
};

type AdminProps = {
  name: string;
  permissions: string;
};

const ClientProfile = ({ name, purchases }: ClientProps) => {
  return (
    <div className='bg-sky-300 text-blue-950 flex flex-col gap-2 rounded-md py-6 px-4'>
      <h3 className='text-lg '>Cliente: {name}</h3>
      <p className=''>Compras: {purchases}</p>
    </div>
  );
};

const AdminProfile = ({ name, permissions }: AdminProps) => {
  return (
    <div className='bg-sky-300 text-blue-950 flex flex-col gap-2 rounded-md py-6 px-4'>
      <h3 className='text-lg '>Admin: {name}</h3>
      <p className=''>Permisos: {permissions}</p>
    </div>
  );
};
