import React from "react";
import clxs from 'clsx'

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

const H1: React.FC<TypographyProps> = ({ children, className}) => {
  return (
    <h1 className={clxs("text-5xl font-black  md:text-7xl lg:text-9xl", className)}>
      {children}
    </h1>
  );
};

const H2: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h1 className={clxs("font-black text-gray-400 text-3xl pt-10 md:text-5xl lg:text-7xl", className)}>
      {children}
    </h1>
  );
};

export { H1, H2 };
