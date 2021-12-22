import React from 'react';

type LinkProps = {
  children: string
  href: string
}

const Link: React.FC<LinkProps> = ({children, href }) => {
  return (
    <a
    href={href}
    className="text-white bg-purple-700 rounded-full py-3 px-8 text-2xl mt-10 animate-bounce hover:bg-purple-600 transition-all 
    md:text-3xl
    md:py-4
    lg:py-6
    lg:px-12
    "
  >
    {children}
  </a>
  );
}

export default Link;