import Root from "../../Layout/Layout";
import { RegisterForm } from "../../components";

const Register: React.FC = () => {
  return (
    <Root>
      <div className="bg-gradient-to-r text-white from-indigo-500 to-purple-500 min-h-[calc(100vh-60px)] w-full flex flex-col items-center justify-center text-xl">
        <RegisterForm />
      </div>
    </Root>
  );
};

export default Register;
