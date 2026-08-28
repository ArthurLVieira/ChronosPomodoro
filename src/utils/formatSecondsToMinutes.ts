import type React from 'react';

interface FormatSecondsToMinutesProps {
  seconds: number;
}

export const FormatSecondsToMinutes: React.FC<FormatSecondsToMinutesProps> = ({
  seconds,
}): string => {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsMod = String(Math.floor(seconds % 60)).padStart(2, '0');
  return `${minutes}:${secondsMod}`;
};
