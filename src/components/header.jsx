
import logo from "../assets/logo.png";
import {
  FaHome,
  FaLaptopCode,
  FaBible,
  FaFlag,
  FaSeedling,
  FaChartLine,
} from "react-icons/fa";

import { FaMusic } from "react-icons/fa6";
import { MdMoreHoriz, MdSportsBasketball } from "react-icons/md";
import { useState, useEffect } from "react";
import LoginForm from "./loginForm";

function Header() {
  const toDayDate = new Date();
  const [isActive, setIsActive] = useState("All");
  const [isOpen, setIsOpen] = useState(false); 
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

 
  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 10000);

    return () => clearTimeout(welcomeTimer);
  }, []);

  const items = [
    { label: "All", icon: <FaHome /> },
    { label: "Sport", icon: <MdSportsBasketball /> },
    { label: "Religion", icon: <FaBible /> },
    { label: "Politics", icon: <FaFlag /> },
    { label: "Agriculture", icon: <FaSeedling /> },
    { label: "Business", icon: <FaChartLine /> },
    { label: "Entertainment", icon: <FaMusic /> },
    { label: "Technology", icon: <FaLaptopCode /> },
  ];

  
  const handleSubscribe = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);
    }, 5000);
  };

  return (
    <>
      <div className="bg-white flex justify-between items-center py-5 px-30 border-b-2 border-gray-300">
        <div className="flex items-center">
          <img
            className="w-32 h-24"
            src={logo}
            alt="logo"
          />

          <h1 className="font-bold text-3xl text-blue-900">
            THE DAILY BRIEF
          </h1>
        </div>

        <p>{toDayDate.toString()}</p>

        <button
          onClick={handleSubscribe}
          className="bg-blue-900 text-white py-2 px-5 font-bold rounded-md cursor-pointer"
        >
          Subscribe
        </button>
      </div>

      <div className="px-24 py-5 bg-white flex items-center gap-8">
        {items.map((item, index) => {
          const isCurrentActive = isActive === item.label;

          return (
            <div
              key={index}
              onClick={() => setIsActive(item.label)}
              className={`flex items-center cursor-pointer pb-3 gap-2 ${
                isCurrentActive
                  ? "border-b-2 border-blue-700"
                  : ""
              }`}
            >
              <span
                className={
                  isCurrentActive
                    ? "text-blue-700"
                    : "text-gray-600"
                }
              >
                {item.icon}
              </span>

              <span
                className={`font-medium text-lg ${
                  isCurrentActive
                    ? "text-blue-700"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}

        <div
          onClick={() => setIsActive("More")}
          className={`flex items-center pb-3 cursor-pointer gap-2 ${
            isActive === "More"
              ? "border-b-2 border-blue-700"
              : ""
          }`}
        >
          <span
            className={
              isActive === "More"
                ? "text-blue-700"
                : "text-gray-600"
            }
          >
            More
          </span>

          <MdMoreHoriz
            className={`mt-3 ${
              isActive === "More"
                ? "text-blue-700"
                : "text-gray-600"
            }`}
          />
        </div>
      </div>

{showWelcome && (
  <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
    <h1 className="text-5xl font-bold bg-gradient-to-r bg-yellow-300 via-pink-600 to-orange-500 bg-clip-text text-transparent overflow-hidden whitespace-nowrap animate-[welcome_10s_ease-in-out_forwards]">
      Welcome to our Page.
    </h1>
  </div>
)}

    
      {isLoading && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] p-8 rounded-md shadow-lg text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Loading...
            </h2>

            <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
              <div className="h-full bg-blue-700 animate-[loading_5s_linear_forwards]"></div>
            </div>

            <p className="mt-4 text-gray-600">
              Please wait...
            </p>
          </div>
        </div>
      )}

    
      {isOpen && (
        <LoginForm
          isClosed={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Header;


