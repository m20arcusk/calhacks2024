import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Import the default styles
import '../styles/Music.css';

const CustomAudioPlayer: React.FC = () => {
  return (
    <AudioPlayer
      autoPlay={false}
      src="/fein.mp3"
      defaultDuration='' // Keep duration for layout, hide with CSS
      customAdditionalControls={[]} // No additional controls, removes the repeat button
      layout='stacked'
      hasDefaultKeyBindings={false}
    />
  );
};

export default CustomAudioPlayer;