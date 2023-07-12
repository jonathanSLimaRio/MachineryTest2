import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  const buttonClass = variant === 'primary' ? 'button' : 'button-secondary';

  return (
    <button
      onClick={onClick}
      className={buttonClass}
    >
      {children}
    </button>
  );
};

export default Button;
