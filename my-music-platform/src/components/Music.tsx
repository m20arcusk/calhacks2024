import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Import the default styles
import '../styles/Music.css';

interface CustomAudioPlayerProps {
    src: string; // Prop for the audio link
}

const CustomAudioPlayer: React.FC<CustomAudioPlayerProps> = ({ src }) => { // Apply props interface here
  return (
    <AudioPlayer
      autoPlay={false}
      src={src}
      defaultDuration='' // Keep duration for layout, hide with CSS
      customAdditionalControls={[]} // No additional controls, removes the repeat button
      customVolumeControls={[]}
      layout='stacked'
      hasDefaultKeyBindings={false}
    />
  );
};

export default CustomAudioPlayer;