import Root from "../../Layout/Layout";
import { RegisterForm } from "../../components";

const Register = () => {
  return (
    <>
      <Root>
        <div className="bg-gradient-to-r text-white from-indigo-500 to-purple-500 min-h-screen w-full flex flex-col items-center justify-center text-xl">
          <RegisterForm />
        </div>
      </Root>
    </>
  );
};

export default Register;
