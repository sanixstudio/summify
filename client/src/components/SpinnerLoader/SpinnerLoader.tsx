import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <Oval
      height={80}
      width={80}
      color="#fff"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#fff"
      strokeWidth={4}
      strokeWidthSecondary={2}
    />
  );
}
