import React, { ReactNode } from "react";
import { Header } from "../components";

const Root: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default Root;
