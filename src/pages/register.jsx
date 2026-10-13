
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black/40 px-3 py-5">
      <div className="bg-gray-200 p-5 sm:p-8 lg:p-10 shadow-lg w-full max-w-[500px] rounded-md">
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-black font-medium cursor-pointer"
          >
            Back
          </button>
        </div>

        <h1 className="text-center font-bold text-3xl my-6">
          Register
        </h1>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="register-name"
              className="block font-medium mb-2"
            >
              Name
            </label>

            <input
              id="register-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              autoComplete="name"
              className="w-full p-3 border border-gray-300 rounded-md bg-white outline-none focus:border-blue-700"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="register-phone"
              className="block font-medium mb-2"
            >
              Phone Number
            </label>

            <input
              id="register-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              autoComplete="tel"
              className="w-full p-3 border border-gray-300 rounded-md bg-white outline-none focus:border-blue-700"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="register-email"
              className="block font-medium mb-2"
            >
              Email
            </label>

            <input
              id="register-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="email"
              className="w-full p-3 border border-gray-300 rounded-md bg-white outline-none focus:border-blue-700"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="register-password"
              className="block font-medium mb-2"
            >
              Password
            </label>

            <input
              id="register-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="new-password"
              className="w-full p-3 border border-gray-300 rounded-md bg-white outline-none focus:border-blue-700"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="register-confirm-password"
              className="block font-medium mb-2"
            >
              Confirm Password
            </label>

            <input
              id="register-confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              autoComplete="new-password"
              className="w-full p-3 border border-gray-300 rounded-md bg-white outline-none focus:border-blue-700"
              required
            />

            {confirmPassword && password !== confirmPassword && (
              <p className="text-red-600 text-sm mt-2">
                Passwords do not match.
              </p>
            )}

            {confirmPassword && password === confirmPassword && (
              <p className="text-green-600 text-sm mt-2">
                Passwords match.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-md font-bold hover:bg-blue-800 cursor-pointer"
          >
            Register
          </button>
        </form>

        <div className="flex flex-wrap justify-center items-center gap-3 mt-6 text-center">
          <p>Already have an account?</p>

          <Link
            to="/"
            className="text-blue-700 underline cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
