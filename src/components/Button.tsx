import React, { MouseEventHandler } from 'react';

function Button({
  children,
  onClick = () => {},
  disabled = false,
  type = 'button',
}: {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  type: 'button' | 'submit' | 'reset';
}) {
  return (
    <button
      className='bg-pink-600 hover:bg-pink-500 text-white py-2 px-4 rounded-md border-inherit min-w-fit max-w-fit max-h-fit'
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
