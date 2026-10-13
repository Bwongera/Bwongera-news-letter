
import logo from "../assets/logo.png";
import {
  FaHome,
  FaLaptopCode,
  FaBible,
  FaFlag,
  FaSeedling,
  FaChartLine,
  FaMusic,
} from "react-icons/fa";
import {
  MdMoreHoriz,
  MdSportsBasketball,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import LoginForm from "./loginForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const toDayDate = new Date();
  const [isActive, setIsActive] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const menuRef = useRef(null);
  const subscribeTimerRef = useRef(null);

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
    if (isLoading) return;

    setIsLoading(true);

    subscribeTimerRef.current = setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);

      toast.info(
        "Please log in to subscribe to our newsletter."
      );
    }, 5000);
  };

  const checkMenuScroll = () => {
    const menu = menuRef.current;

    if (!menu) return;

    const isAtStart = menu.scrollLeft <= 5;
    const isAtEnd =
      menu.scrollLeft + menu.clientWidth >= menu.scrollWidth - 5;

    setShowLeftArrow(!isAtStart);
    setShowRightArrow(!isAtEnd);
  };

  useEffect(() => {
    const menu = menuRef.current;

    checkMenuScroll();

    if (!menu) return undefined;

    menu.addEventListener("scroll", checkMenuScroll);
    window.addEventListener("resize", checkMenuScroll);

    return () => {
      menu.removeEventListener("scroll", checkMenuScroll);
      window.removeEventListener("resize", checkMenuScroll);

      if (subscribeTimerRef.current) {
        clearTimeout(subscribeTimerRef.current);
      }
    };
  }, []);

  const scrollMenu = (direction) => {
    const menu = menuRef.current;

    if (!menu) return;

    menu.scrollBy({
      left: direction * 200,
      behavior: "smooth",
    });

    setTimeout(checkMenuScroll, 350);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="light"
        newestOnTop
        closeOnClick
        pauseOnHover
      />

      <header className="bg-white flex flex-col min-[768px]:flex-row justify-between items-center py-4 min-[768px]:py-5 px-4 min-[768px]:px-10 min-[1024px]:px-30 border-b-2 border-gray-300 gap-4 min-[768px]:gap-0">
        <div className="flex items-center shrink-0">
          <img
            className="w-16 h-12 min-[480px]:w-20 min-[480px]:h-16 min-[768px]:w-28 min-[768px]:h-20 min-[1024px]:w-32 min-[1024px]:h-24 object-contain"
            src={logo}
            alt="The Daily Brief logo"
          />

          <h1 className="font-bold text-lg min-[480px]:text-xl min-[768px]:text-2xl min-[1024px]:text-3xl text-blue-900 whitespace-nowrap">
            THE DAILY BRIEF
          </h1>
        </div>

        <p className="text-xs min-[480px]:text-sm min-[768px]:text-base text-center">
          {toDayDate.toString()}
        </p>

        <button
          type="button"
          onClick={handleSubscribe}
          disabled={isLoading}
          className="bg-blue-900 text-white py-2 px-5 font-bold rounded-md cursor-pointer shrink-0 disabled:opacity-70"
        >
          Subscribe
        </button>
      </header>

      <nav className="relative bg-white" aria-label="News categories">
        <div
          ref={menuRef}
          className="px-2 min-[400px]:px-3 min-[480px]:px-4 min-[768px]:px-8 min-[1024px]:px-24 py-3 min-[768px]:py-5 flex items-center gap-3 min-[400px]:gap-4 min-[480px]:gap-5 min-[768px]:gap-7 overflow-x-auto whitespace-nowrap scrollbar-hide"
        >
          {items.map((item) => {
            const isCurrentActive = isActive === item.label;

            return (
              <button
                type="button"
                key={item.label}
                onClick={() => setIsActive(item.label)}
                aria-pressed={isCurrentActive}
                className={`flex items-center cursor-pointer pb-2 min-[480px]:pb-3 gap-1 min-[480px]:gap-2 shrink-0 ${
                  isCurrentActive
                    ? "border-b-2 border-blue-700"
                    : ""
                }`}
              >
                <span
                  className={`text-sm min-[400px]:text-base min-[768px]:text-lg ${
                    isCurrentActive ? "text-blue-700" : "text-gray-600"
                  }`}
                >
                  {item.icon}
                </span>

                <span
                  className={`font-medium text-xs min-[400px]:text-sm min-[480px]:text-base min-[768px]:text-lg ${
                    isCurrentActive ? "text-blue-700" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setIsActive("More")}
            aria-pressed={isActive === "More"}
            className={`flex items-center pb-2 min-[480px]:pb-3 cursor-pointer gap-1 min-[480px]:gap-2 shrink-0 ${
              isActive === "More"
                ? "border-b-2 border-blue-700"
                : ""
            }`}
          >
            <span
              className={
                isActive === "More" ? "text-blue-700" : "text-gray-600"
              }
            >
              More
            </span>

            <MdMoreHoriz
              className={`mt-2 ${
                isActive === "More" ? "text-blue-700" : "text-gray-600"
              }`}
            />
          </button>
        </div>

        {showLeftArrow && (
          <button
            type="button"
            onClick={() => scrollMenu(-1)}
            aria-label="Scroll categories left"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-r-full p-1 cursor-pointer z-10"
          >
            <MdKeyboardArrowLeft className="text-3xl text-gray-700" />
          </button>
        )}

        {showRightArrow && (
          <button
            type="button"
            onClick={() => scrollMenu(1)}
            aria-label="Scroll categories right"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-l-full p-1 cursor-pointer z-10"
          >
            <MdKeyboardArrowRight className="text-3xl text-gray-700" />
          </button>
        )}
      </nav>

      {isLoading && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-[400px] p-8 rounded-md shadow-lg text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Loading...
            </h2>

            <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
              <div className="h-full bg-blue-700 animate-[loading_5s_linear_forwards]" />
            </div>

            <p className="mt-4 text-gray-600">
              Please wait...
            </p>
          </div>
        </div>
      )}

      {isOpen && (
        <LoginForm isClosed={() => setIsOpen(false)} />
      )}
    </>
  );
}

export default Header;
