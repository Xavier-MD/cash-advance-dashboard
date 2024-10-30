import React from 'react';
import { motion } from 'framer-motion';

interface Transaction {
  id: string;
  date: string;
  amount: number;
  status: 'Pending' | 'Completed';
  repaymentDate?: string;
}

interface Props {
  transaction: Transaction;
}

const TransactionItem: React.FC<Props> = ({ transaction }) => {
  return (
    <motion.li
      className="mb-2 p-4 bg-gray-800 rounded cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-lg">{transaction.date}</p>
          <p className="text-sm text-gray-400">{transaction.status}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">
            ${transaction.amount.toFixed(2)}
          </p>
        </div>
      </div>
      {/* Additional Details */}
      <div className="mt-2 text-sm text-gray-400">
        <p>Transaction ID: {transaction.id}</p>
        {transaction.repaymentDate && (
          <p>Repayment Date: {transaction.repaymentDate}</p>
        )}
      </div>
    </motion.li>
  );
};

export default TransactionItem;
