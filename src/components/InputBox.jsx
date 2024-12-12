import React from 'react';
import { FiSend, FiImage, FiMic } from 'react-icons/fi';
import { motion } from 'framer-motion';

const InputBox = ({ input, setInput, handleSubmit, isLoading }) => {
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <button
        type="button"
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <FiImage className="w-5 h-5" />
      </button>
      
      <button
        type="button"
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <FiMic className="w-5 h-5" />
      </button>
      
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Posez votre question..."
        className="flex-grow p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <motion.button
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={isLoading}
        className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        <FiSend className="w-5 h-5" />
      </motion.button>
    </form>
  );
};

export default InputBox;
