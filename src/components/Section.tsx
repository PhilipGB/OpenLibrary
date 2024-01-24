import React from 'react';

function Section({ children }: { children: React.ReactNode }) {
  return <section className='p-10 max-w-screen-sm'>{children}</section>;
}

export default Section;
