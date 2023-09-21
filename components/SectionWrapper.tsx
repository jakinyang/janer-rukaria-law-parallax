import React, {ReactNode} from 'react';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="p-8 min-w-full max-w-[1100px]"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
