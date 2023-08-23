import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[60px] flex items-center justify-between px-4">
      <h1 className="text-3xl font-bold uppercase">
        <Link to="/home" className="">Summify</Link>
      </h1>
      <div>
        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-4 py-2 text-white">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
