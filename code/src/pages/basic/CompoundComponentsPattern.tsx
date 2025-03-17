import { ReactNode } from 'react';
import { HeaderLayout } from '../../layouts';

export const CompoundComponentsPattern = () => {
  return (
    <HeaderLayout title='Compound Components Pattern' path='basic'>
      <List>
        <ListItem>Cat</ListItem>
        <ListItem>Dog</ListItem>
        <ListItem>Duck</ListItem>
      </List>
    </HeaderLayout>
  );
};

type ListProps = {
  children: ReactNode;
};

const List = ({ children, ...props }: ListProps) => (
  <ul className='bg-blue-400 rounded-xl p-4' {...props}>
    {children}
  </ul>
);

const ListItem = ({ children, ...props }: ListProps) => {
  return (
    <li className='text-blue-950 text-lg' {...props}>
      {children}
    </li>
  );
};

export { List, ListItem };
