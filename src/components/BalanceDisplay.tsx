import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BalanceDisplay: React.FC = () => {
  const appContext = useContext(AppContext);

  if (!appContext) return null;

  const { balance } = appContext;

  return (
    <div className="py-[2rem]">
      <p className="text-3xl font-semibold font-afacadFlux px-[1.2rem] text-slate-100">
        Balance: ${balance.toFixed(2)}
      </p>
    </div>
  );
};

export default BalanceDisplay;

