import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const ErrorAnimation = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.span
        style={{ color: 'red', margin: '0.5rem 1rem', fontSize: '13px', letterSpacing: '-0.2px' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
};
