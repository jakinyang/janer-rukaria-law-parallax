import React, {ReactNode} from 'react';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="p-4 m-4 mt-32 mb-32"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
