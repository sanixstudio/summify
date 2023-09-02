import React from "react";
import { Oval } from "react-loader-spinner";

const SpinnerLoader: React.FC = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#fff"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#fff"
      strokeWidth={4}
    />
  );
};

export default SpinnerLoader;
