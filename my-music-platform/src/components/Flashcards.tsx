import React from 'react'; 
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
  direction: 'left' | 'right'; 
}

const Flashcards: React.FC<FlashcardsProps> = ({ currentCardIndex, cardData, direction }) => {
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
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCardIndex}
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