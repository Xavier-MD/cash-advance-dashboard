import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      className="mb-2 p-4 bg-slate-800 rounded cursor-pointer font-afacadFlux shadow-md"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-lg text-slate-100">{transaction.date}</p>
          <p className="text-sm text-slate-400">{transaction.status}</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-slate-100">
            ${transaction.amount.toFixed(2)}
          </p>
        </div>
      </div>
      {/* Additional Details */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="mt-2 text-sm text-slate-400"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p>Transaction ID: {transaction.id}</p>
            {transaction.repaymentDate && (
              <p>Repayment Date: {transaction.repaymentDate}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default TransactionItem;
