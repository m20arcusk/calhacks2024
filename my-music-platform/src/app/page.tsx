'use client';

import Image from "next/image";
import CustomAudioPlayer from '@/components/Music';
import MultiActionAreaCard from '@/components/Card';
import Taskbar from "@/components/Taskbar";
import { Box } from '@mui/material';

export default function Home() {
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
          position: 'relative', // Ensure relative positioning for the container
        }}
      >
        {/* Taskbar is positioned at the top, out of the flow of the layout */}
        <Box
          sx={{
            position: 'absolute', // Absolutely position the Taskbar
            top: 0,
            left: 0,
            width: '100%', // Make Taskbar span full width
            zIndex: 1, // Make sure Taskbar stays above content
          }}
        >
          <Taskbar />
        </Box>

        {/* Center the MultiActionAreaCard */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Full viewport height
          }}
        >
          <MultiActionAreaCard />
        </Box>
      </Box>
    </div>
  );
}
