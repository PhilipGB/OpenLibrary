import React from 'react';

function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className='w-full bg-white shadow-md py-6'>
      <h1 className='text-2xl font-medium px-4 mx-4'>{children}</h1>
    </header>
  );
}

export default Header;
