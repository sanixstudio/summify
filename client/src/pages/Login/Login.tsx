import { Helmet } from "react-helmet";
import Root from "../../Layout/Layout";
import { LoginForm } from "../../components";

const Login:React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Chat-Bot Login</title>
      </Helmet>
      <Root>
        <div className="bg-gradient-to-r text-white from-indigo-500 pb-10 to-purple-500 min-h-[calc(100vh-60px)] w-full flex flex-col items-center justify-center text-xl">
          <LoginForm />
        </div>
      </Root>
    </>
  );
};

export default Login;
