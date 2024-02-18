import React from "react";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Section: React.FC<Props> = ({ children }) => {
  return <div className="w-full border  max-w-7xl">{children}</div>;
};

export default Section;
