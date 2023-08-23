import { Header } from "../components";

const Root = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default Root;
