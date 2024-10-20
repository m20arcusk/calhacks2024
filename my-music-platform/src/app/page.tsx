'use client';

import Image from "next/image";
import CustomAudioPlayer from '@/components/Music';
import MultiActionAreaCard from '@/components/Card';

export default function Home() {
  return (
    <div className="">
      <MultiActionAreaCard />
      <CustomAudioPlayer />
    </div>
  );
}
