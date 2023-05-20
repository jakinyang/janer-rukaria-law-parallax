import React, {ReactNode} from 'react';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="w-full min-h-screen p-8 flex flex-col items-center justify-center"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
