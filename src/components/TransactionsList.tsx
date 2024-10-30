import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import TransactionItem from './TransactionItem';

const TransactionsList: React.FC = () => {
    const { transactions } = useContext(AppContext)!;
    const [filter, setFilter] = useState<'All' | 'Pending' | 'Completed'>(
      'All',
    );

    const filteredTransactions = transactions.filter((transaction) => {
      if (filter === 'All') return true;
      return transaction.status === filter;
    });

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Recent Transactions</h2>
      {/* Filter Buttons */}
      <div className="mb-4">
        {['All', 'Pending', 'Completed'].map((status) => (
          <button
            key={status}
            className={`mr-2 px-4 py-2 rounded ${
              filter === status ? 'bg-blue-600' : 'bg-gray-700'
            }`}
            onClick={() => setFilter(status as 'All' | 'Pending' | 'Completed')}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Transactions List */}
      <ul>
        {filteredTransactions.slice(0, 5).map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
