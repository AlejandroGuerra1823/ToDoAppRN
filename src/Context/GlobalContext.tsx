import React, { createContext, useState, ReactNode } from 'react';

// Define el tipo de datos que contendrá el contexto
interface TypesOfCategories {
  categories: number | undefined;
  setCategories: React.Dispatch<React.SetStateAction<number | undefined>>;
}

// Crea el contexto con un valor inicial
export const AuthContext = createContext<TypesOfCategories>({
  categories: undefined,
  setCategories: () => {}
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  const [categories, setCategories] = useState<number | undefined>(undefined);

  return (
    <AuthContext.Provider value={{ categories, setCategories }}>
      {children}
    </AuthContext.Provider>
  );
};