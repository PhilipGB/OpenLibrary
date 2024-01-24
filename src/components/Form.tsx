import Button from './Button';
import { FormEventHandler } from 'react';

function Form({
  name,
  children,
  onSubmit,
  disableSubmit = false,
}: {
  name: string;
  children: React.ReactNode[];
  onSubmit: FormEventHandler<HTMLFormElement>;
  disableSubmit: boolean;
}) {
  return (
    <form onSubmit={onSubmit}>
      <h1 className='text-2xl font-medium mb-6'>{name}</h1>

      <ul className='flex-col max-w-screen-sm'>
        {children.map((child, index) => {
          return (
            <li key={index} className='max-w-screen-sm my-2'>
              {child}
            </li>
          );
        })}
        <li className='text-right my-8'>
          <Button disabled={disableSubmit} type='submit'>
            Search
          </Button>
        </li>
      </ul>
    </form>
  );
}

export default Form;
