import React from 'react';
import { motion } from 'framer-motion';
import RequestAdvanceModal from './RequestAdvanceModal';

const RequestAdvanceButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        className="w-full h-full bg-blue-600 hover:bg-blue-700 text-slate-100 font-afacadFlux font-semibold rounded text-3xl text-center px-[1rem]"
        onClick={() => setIsModalOpen(true)}
      >
        <span className=''>Request a Cash Advance</span>
      </motion.button>
      {isModalOpen && (
        <RequestAdvanceModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default RequestAdvanceButton;
