import React, { createContext, useState, ReactNode } from 'react';
import { Transaction } from '../types/Transaction';

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

export const AppProvider = ({ children }: AppProviderProps) => {
  const [balance, setBalance] = useState<number>(350);
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      date: '2024-10-25',
      amount: 100,
      status: 'Completed',
      repaymentDate: '2024-11-25',
    },
    {
      id: '2',
      date: '2024-10-20',
      amount: 150,
      status: 'Pending',
    },
    {
      id: '3',
      date: '2024-10-15',
      amount: 200,
      status: 'Completed',
      repaymentDate: '2024-11-15',
    },
    {
      id: '4',
      date: '2024-10-10',
      amount: 50,
      status: 'Pending',
    },
    {
      id: '5',
      date: '2024-10-05',
      amount: 75,
      status: 'Completed',
      repaymentDate: '2024-11-05',
    },
  ]);

  return (
    <AppContext.Provider
      value={{ balance, setBalance, transactions, setTransactions }}
    >
      {children}
    </AppContext.Provider>
  );
};
