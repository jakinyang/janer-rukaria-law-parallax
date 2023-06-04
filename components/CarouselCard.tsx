import React from 'react';

interface CarouselCardProps {
  text: string;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({ text }) => {
  return (
    <div className="neobrutalist aspect-w-1 aspect-h-1 flex items-center justify-center">
      <p className='neobrutalist'>{text}</p>
    </div>
  );
};