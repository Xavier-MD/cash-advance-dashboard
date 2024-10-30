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

  const [amount, setAmount] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedAmount, setSubmittedAmount] = useState<number | null>(null);

  const maxAmount = balance;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow only numbers, one decimal point, and up to two decimal places
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount)) {
      setError('Please enter a valid amount.');
      return;
    }

    if (numericAmount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    if (numericAmount > maxAmount) {
      setError(`Maximum allowed amount is $${maxAmount.toFixed(2)}.`);
      return;
    }

    // Update balance
    setBalance((prevBalance) => prevBalance - numericAmount);

    // Add new transaction
    const newTransaction: Transaction = {
      id: uuidv4(),
      date: new Date().toISOString().split('T')[0],
      amount: numericAmount,
      status: 'Pending',
    };

    setTransactions((prevTransactions) => [
      newTransaction,
      ...prevTransactions,
    ]);

    setIsSubmitted(true);
    setSubmittedAmount(numericAmount); // Store the submitted amount
    setAmount(''); // Reset the input field
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
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white">
                  $
                </span>
                <input
                  id="amount"
                  type="text"
                  inputMode="decimal"
                  className="w-full p-2 pl-7 rounded bg-gray-700 text-white"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="0.00"
                />
              </div>
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
              You have requested ${submittedAmount?.toFixed(2)}. It will be
              processed shortly.
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
