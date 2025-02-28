import { ChangeEvent, useState, useTransition } from 'react';
import { ReturnBtn } from '../../buttons/ReturnBtn';

const items = [
  'Laptop',
  'DriveBox',
  'Handpad',
  'Headphones',
  'Iphone Max',
  'Portatil',
  'Microphone',
];

export const UseTransition = () => {
  return (
    <div>
      <ReturnBtn />
      <SearchList items={items} />
    </div>
  );
};

function SearchList({ items }: { items: string[] }) {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    startTransition(() => {
      setFilteredItems(
        items.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      );
    });
  };

  return (
    <div>
      <input
        className='bg-amber-50 text-blue-800 placeholder:text-blue-600 font-bold outline-none p-2 mb-2 rounded-xl'
        type='text'
        value={query}
        onChange={handleSearch}
        placeholder='Buscar...'
      />
      {isPending && <p>Cargando...</p>}

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
