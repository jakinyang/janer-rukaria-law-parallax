import React from 'react';
import { Parallax } from '@react-spring/parallax';
import { ContentLayer } from '@/components/ContentLayer';
import { BackgroundLayer } from '@/components/BackgroundLayer';

const App: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Parallax
        pages={8}
        innerStyle={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
        style={{
          top: '0',
          left: '0',
        }}>
          <ContentLayer />
          <BackgroundLayer />
      </Parallax>
    </div>
  );
};

export default App;
