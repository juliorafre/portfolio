'use client';

import { useEffect, useRef } from 'react';

const AudioProfile = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = 1.25;
    }
  }, []);

  return (
    <audio ref={audioRef} controls controlsList="nodownload" preload="metadata" className="mt-4">
      <source src="/audio/profile.mp3" type="audio/mpeg" />
      Your browser doesn&apos;t support HTML5 audio.
    </audio>
  );
};

export default AudioProfile;
