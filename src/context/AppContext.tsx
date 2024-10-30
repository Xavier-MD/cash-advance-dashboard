import React, { createContext, useState, ReactNode } from 'react';

interface Transaction {
  id: string;
  date: string;
  amount: number;
  status: 'Pending' | 'Completed';
  repaymentDate?: string;
}

interface AppContextProps {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [balance, setBalance] = useState<number>(350);
  const [transactions, setTransactions] = useState<Transaction[]>([
    // Initial mock transactions
  ]);

  return (
    <AppContext.Provider
      value={{ balance, setBalance, transactions, setTransactions }}
    >
      {children}
    </AppContext.Provider>
  );
};
