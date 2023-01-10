import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className="mx-auto max-w-[1440px]">{children}</div>;
};

export default Container;
