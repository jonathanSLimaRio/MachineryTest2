import React, { createContext, useState } from 'react';

interface ApiContextProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

interface ApiProviderProps {
    children: React.ReactNode;
  }

export const ApiContext = createContext<ApiContextProps>({ step: 0, setStep: () => {} });

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [step, setStep] = useState(0);

  return (
    <ApiContext.Provider value={{ step, setStep }}>
      {children}
    </ApiContext.Provider>
  );
};
