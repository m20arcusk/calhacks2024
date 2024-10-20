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
          flexDirection: 'column', // Arrange items in a column
          height: '100vh', // Full height of the viewport
          backgroundImage: 'url("/background.svg")',
          backgroundSize: 'cover', // Ensure the background image covers the area
          backgroundPosition: 'center',
        }}
      >
        <Taskbar />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1, // This allows the inner Box to take remaining space
          }}
        >
          <MultiActionAreaCard />
        </Box>
      </Box>
    </div>
  );
}
