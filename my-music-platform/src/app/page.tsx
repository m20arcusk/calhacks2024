'use client';

import Image from "next/image";
import CustomAudioPlayer from '@/components/Music';
import MultiActionAreaCard from '@/components/Card';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <div className="">
      <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Full height of the viewport
                backgroundColor: '#f0f0f0', // Optional background color
            }}
        >
          <MultiActionAreaCard />
        </Box>
    </div>
  );
}
