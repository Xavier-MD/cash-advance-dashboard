import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { Transaction } from '../types/Transaction';

interface Props {
  onClose: () => void;
}

const RequestAdvanceModal: React.FC<Props> = ({ onClose }) => {
  const appContext = useContext(AppContext)!;

  const { balance, setBalance, transactions, setTransactions } = appContext;

  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const maxAmount = balance;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (amount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    if (amount > maxAmount) {
      setError(`Maximum allowed amount is $${maxAmount.toFixed(2)}.`);
      return;
    }

    // Update balance
    setBalance((prevBalance) => prevBalance - amount);

    // Add new transaction
    const newTransaction: Transaction = {
      id: uuidv4(),
      date: new Date().toISOString().split('T')[0],
      amount: amount,
      status: 'Pending',
    };

    setTransactions((prevTransactions) => [
      newTransaction,
      ...prevTransactions,
    ]);

    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="bg-gray-800 p-6 rounded shadow-lg w-11/12 max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-4">
              Request a Cash Advance
            </h2>
            <div className="mb-4">
              <label htmlFor="amount" className="block mb-2">
                Amount ($):
              </label>
              <input
                id="amount"
                type="number"
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                max={maxAmount}
                min={0}
              />
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-2 px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">Success!</h2>
            <p>
              You have requested ${amount.toFixed(2)}. It will be processed
              shortly.
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RequestAdvanceModal;
