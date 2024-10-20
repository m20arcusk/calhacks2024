import React, { useState } from 'react'; // Added useState import
import { motion, AnimatePresence } from 'framer-motion';
import CardFlip from '@/components/CardFlip';

// Define props for Flashcards
interface FlashcardsProps {
  currentCardIndex: number;
  cardData: {
    projectTitle: string;
    audioLink: string;
    completionPercentage: number;
  }[];
  handleNext: () => void;
  handlePrev: () => void;
}

const Flashcards: React.FC<FlashcardsProps> = ({ currentCardIndex, cardData }) => {
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  // You don't need internal next/prev, direction is updated based on current card index
  const variants = {
    hidden: (dir: string) => ({
      x: dir === 'left' ? 100 : -100, // Start off-screen based on direction
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: string) => ({
      x: dir === 'left' ? -100 : 100, // Exit off-screen based on direction
      opacity: 0,
    }),
  };

  return (
    <div>
      <AnimatePresence mode="wait"> {/* Updated here */}
        <motion.div
          key={currentCardIndex} // Key helps with remounting the component on index change
          custom={direction}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <CardFlip
            projectTitle={cardData[currentCardIndex].projectTitle}
            audioLink={cardData[currentCardIndex].audioLink}
            completionPercentage={cardData[currentCardIndex].completionPercentage}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Flashcards;