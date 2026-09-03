import type React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <>
      <h1 {...props}>{children}</h1>
    </>
  );
};

export default Heading;
