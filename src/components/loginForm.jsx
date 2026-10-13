
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

function LoginForm({ isClosed }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    // console.log("Email:", email);
    // console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40 z-50">
      <div className="bg-gray-200 p-10 shadow-lg w-[500px] h-[500px] rounded-md">

        <div className="flex justify-end">
          <IoIosClose
            size={34}
            onClick={isClosed}
            className="cursor-pointer"
          />
        </div>

        <h1 className="text-center font-bold text-3xl my-8">
          Login
        </h1>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md bg-white outline-none focus:border-blue-700"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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

        <div className="flex justify-center items-center gap-3 mt-6">
          <p>You don't have an account?</p>

          <span className="text-blue-700 underline">
            <a href="/register">Sign up</a>
          </span>
        </div>

      </div>
    </div>
  );
}

export default LoginForm;































