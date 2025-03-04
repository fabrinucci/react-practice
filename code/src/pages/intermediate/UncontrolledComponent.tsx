import { type FormEvent, useRef } from 'react';

export const UncontrolledComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = inputRef.current?.value;

    if (text) {
      alert(`Valor del input: ${text}`);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  return (
    <div className='max-w-sm mx-auto'>
      <h1 className='font-bold text-2xl text-center text-blue-200 mb-6'>
        Formulario No Controlado
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-blue-100'>Ingresa el input</label>
          <input
            type='text'
            className='block w-full p-2.5 border-2 rounded-md bg-blue-600 border-blue-500 placeholder-blue-300 text-blue-100 focus:ring-blue-400 focus:border-blue-400 outline-0'
            placeholder='Tu texto'
            ref={inputRef}
          />
        </div>
        <button
          className='text-blue-900 bg-violet-400 hover:bg-violet-300 focus:ring-2 focus:ring-violet-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer'
          type='submit'
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
