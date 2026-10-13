

import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm({ isClosed }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

  
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/40 z-50 px-3 py-5"
      onClick={isClosed}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        className="bg-gray-200 p-6 sm:p-10 shadow-lg w-full max-w-[500px] min-h-[450px] rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            type="button"
            onClick={isClosed}
            aria-label="Close login"
            className="cursor-pointer"
          >
            <IoIosClose size={34} />
          </button>
        </div>

        <h1
          id="login-title"
          className="text-center font-bold text-3xl my-8"
        >
          Login
        </h1>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="login-email"
              className="block font-medium mb-2"
            >
              Email
            </label>

            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="email"
              className="w-full p-3 border border-gray-300 rounded-md bg-white outline-none focus:border-blue-700"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="login-password"
              className="block font-medium mb-2"
            >
              Password
            </label>

            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="current-password"
              className="w-full p-3 border border-gray-300 rounded-md bg-white outline-none focus:border-blue-700"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-md font-bold hover:bg-blue-800 cursor-pointer"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
          <p>You don't have an account?</p>

          <Link
            to="/register"
            onClick={isClosed}
            className="text-blue-700 underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;




















