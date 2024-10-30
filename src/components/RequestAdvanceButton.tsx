import React from 'react';
import { motion } from 'framer-motion';
import RequestAdvanceModal from './RequestAdvanceModal';

const RequestAdvanceButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <div className="mb-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Request a Cash Advance
      </motion.button>
      {isModalOpen && (
        <RequestAdvanceModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default RequestAdvanceButton;
