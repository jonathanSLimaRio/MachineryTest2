import React, { ReactNode } from "react";
import 'tailwindcss/tailwind.css';

type CardProps = {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="min-w-11.75 text-dark-grey bg-transparent border-2 border-dark-grey rounded-md flex justify-center items-center px-6 py-4 font-semibold leading-1.25 transition-all duration-200 hover:bg-light-yellow hover:border-orange">
      {children}
    </div>
  );
}

export default Card;
