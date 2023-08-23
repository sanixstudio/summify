import { Header } from "../components";

const Root = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Root;
