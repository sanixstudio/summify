import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Button } from "@radix-ui/themes";
import { useEffect } from "react";

const Header: React.FC = () => {
  const { token, setToken } = useAuth();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [setToken]);

  return (
    <div className="h-[60px] flex items-center justify-between px-4">
      <h1 className="text-3xl font-bold uppercase">
        <Link to="/home" className="">
          Summify
        </Link>
      </h1>
      {token && (
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
        {token ? (
          <Button
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-4 py-2 text-white"
          >
            Logout
          </Button>
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
