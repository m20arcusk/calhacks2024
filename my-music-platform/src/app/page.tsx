'use client';

import Image from "next/image";
import Taskbar from "@/components/Taskbar";
import Flashcards from "@/components/Flashcards";
import { Box } from '@mui/material';
import { useState } from 'react';

const cardData = [
  { projectTitle: "FEIN", audioLink: "/fein.mp3", completionPercentage: 30 },
  { projectTitle: "HelloHacks", audioLink: "/fein.mp3", completionPercentage: 40 },
  { projectTitle: "UX Open", audioLink: "/fein.mp3", completionPercentage: 50 },
];

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => 
      (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  return (
    <div className="">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          backgroundImage: 'url("/background.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1, 
          }}
        >
          <Taskbar />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1, 
          }}
        >
          <Image
            src="/leftarrow.png" 
            alt="Previous"
            width={70}
            height={70}
            onClick={handlePrev}
            style={{ cursor: 'pointer', marginRight: '10vh' }} 
          />

          {/* Pass the currentCardIndex and the handler functions to Flashcards */}
          <Flashcards 
            currentCardIndex={currentCardIndex} 
            cardData={cardData} 
            handleNext={handleNext} 
            handlePrev={handlePrev}
          />
          
          <Image
            src="/rightarrow.png"
            alt="Next"
            width={70}
            height={70}
            onClick={handleNext}
            style={{ cursor: 'pointer', marginLeft: '10vh' }} 
          />
        </Box>
      </Box>
    </div>
  );
}
