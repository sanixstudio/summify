import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Button } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoginModal, RegisterModal } from "..";

const Header: React.FC = () => {
  const { token, setToken } = useAuth();
  const navigate = useNavigate();

  // State to control the visibility of the login modal
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const closeLoginModal = () => setLoginModalOpen(false);

  // State to control the visibility of the register modal
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [setToken]);

  const handleLogout = () => {
    axios.post("https://ai-chat-bot-summarizer.onrender.com/api/auth/logout");
    localStorage.removeItem("authToken");
    navigate(0);
  };

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
            onClick={() => handleLogout()}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-4 py-2 text-white"
          >
            Logout
          </Button>
        ) : (
          <div className="flex gap-8">
            <Button
              onClick={() => setLoginModalOpen(true)} // Open the modal when the button is clicked
              className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-4 py-2 text-white"
            >
              Sign In
            </Button>
            <Button
              onClick={() => setRegisterModalOpen(true)} // Open the modal when the button is clicked
              className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-4 py-2 text-white"
            >
              Register
            </Button>
          </div>
        )}
      </div>

      {/* Conditionally render the LoginModal */}
      {isLoginModalOpen && (
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      )}

      {isRegisterModalOpen && (
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={closeRegisterModal}
        />
      )}
    </div>
  );
};

export default Header;
