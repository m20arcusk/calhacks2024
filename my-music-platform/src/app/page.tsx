'use client';

import Image from "next/image";
import MultiActionAreaCard from '@/components/Card';
import Taskbar from "@/components/Taskbar";
import { Box } from '@mui/material';
import { useState } from 'react';

const cardData = [
  { id: 1, content: "Card 1 Content" },
  { id: 2, content: "Card 2 Content" },
];

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [clickedStates, setClickedStates] = useState<boolean[]>([false, false]);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => 
      (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  const handleCardClick = (index: number) => {
    setClickedStates(prevStates => 
      prevStates.map((state, i) => (i === index ? !state : state))
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
          
          <MultiActionAreaCard />
          
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
