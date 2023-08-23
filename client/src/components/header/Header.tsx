import { Link } from "react-router-dom";

const Header = () => {
  const user = null;

  return (
    <div className="h-[60px] flex items-center justify-between px-4">
      <h1 className="text-3xl font-bold uppercase">
        <Link to="/home" className="">
          Summify
        </Link>
      </h1>
      {user && (
        <ul className="flex gap-8">
          <li>
            <Link to="#">Saved Chats</Link>
          </li>
          <li>
            <Link to="#">Saved Summaries</Link>
          </li>
        </ul>
      )}
      <div>
        {user ? (
          <Link
            to="/home"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-4 py-2 text-white"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-4 py-2 text-white"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
