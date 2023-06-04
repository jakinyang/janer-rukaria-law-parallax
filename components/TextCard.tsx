import React from 'react';

interface TextCardProps {
  text: string;
}

const TextCard: React.FC<TextCardProps> = ({ text }) => {
  return (
    <div className="neobrutalist">
      {text}
    </div>
  );
};

export default TextCard;