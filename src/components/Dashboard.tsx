import React from 'react';
import BalanceDisplay from './BalanceDisplay';
import RequestAdvanceButton from './RequestAdvanceButton';
import TransactionsList from './TransactionsList';


const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 bg-gray-900 text-white">
      {/* Header with Logo */}
      <header className="p-4 flex items-center justify-between">
        <img src="/assets/images/bree-logo.png" alt="Company Logo" className="h-12" />
        {/* You can add more header items here */}
      </header>
      {/* Main Content */}
      <main className="p-4">
        <BalanceDisplay />
        <RequestAdvanceButton />
        <TransactionsList />
      </main>
    </div>
  );
};

export default Dashboard;
