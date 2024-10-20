'use client';

import Image from "next/image";
import Taskbar from "@/components/Taskbar";
import Flashcards from "@/components/Flashcards";
import { Box } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';
import Typography from '@mui/material/Typography';

const cardData = [
  { projectTitle: "Blank Space", audioLink: "/tswift.mp3", completionPercentage: 20 },
  { projectTitle: "Attention", audioLink: "/attention.mp3", completionPercentage: 70 },
  { projectTitle: "HelloHacks", audioLink: "/hellohacks.wav", completionPercentage: 100 },
];

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right'); // Initial direction

  const handleNext = () => {
    setDirection('right'); // Set direction to right when going next
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setDirection('left'); // Set direction to left when going previous
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

          {/* Pass the currentCardIndex, direction, and the handler functions to Flashcards */}
          <Flashcards
            currentCardIndex={currentCardIndex}
            cardData={cardData}
            direction={direction} // Pass the direction state
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

        {/* Button in the bottom left corner */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '30px',
            left: '30px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconButton
            component="label"
            role={undefined}
            tabIndex={-1}
            sx={{
              minWidth: 'auto',
              padding: '8px',
              backgroundColor: '#434343',
              borderRadius: '50%',
              '&:hover': {
                backgroundColor: 'darkgrey',
              },
            }}
          >
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
            <UploadIcon sx={{ color: 'white', fontSize: '30px' }} />
          </IconButton>

          <Typography
            sx={{
              color: 'grey',
              marginLeft: '8px',
              fontSize: '16px',
            }}
            fontFamily={'Verdana'}
          >
            Upload Your Project
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
