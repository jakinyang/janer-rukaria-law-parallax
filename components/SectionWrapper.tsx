import React, {ReactNode} from 'react';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={`p-8 w-full max-w-[1100px] ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
