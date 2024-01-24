import React from 'react';

function ListCard({ children }: { children: React.ReactNode }) {
  return (
    <li className='bg-white rounded-md mb-1 py-4 px-6 w-auto [&>*]:py-1'>
      {children}
    </li>
  );
}

export default ListCard;
