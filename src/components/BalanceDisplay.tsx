import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BalanceDisplay: React.FC = () => {
  const appContext = useContext(AppContext);

  if (!appContext) return null;

  const { balance } = appContext;

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold">Available Balance</h2>
      <p className="text-4xl font-bold mt-2">${balance.toFixed(2)}</p>
    </div>
  );
};

export default BalanceDisplay;
