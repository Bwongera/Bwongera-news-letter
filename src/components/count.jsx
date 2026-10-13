
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ isClosed }) {
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

    // console.log("Name:", name);
    // console.log("Phone:", phone);
    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("Confirm Password:", confirmPassword);

    
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40 z-50">
      <div className="bg-gray-200 p-10 shadow-lg w-[500px] rounded-md">
       
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="text-black font-bold font-medium cursor-pointer"
          >
             Back
          </button>

        </div>

        <h1 className="text-center font-bold text-3xl my-6">
          Register
        </h1>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block font-medium mb-2">
              Name
            </label>

            <input
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
            <label className="block font-medium mb-2">
              Phone Number
            </label>

            <input
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
            <label className="block font-medium mb-2">
              Email
            </label>

            <input
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
            <label className="block font-medium mb-2">
              Password
            </label>

            <input
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
            <label className="block font-medium mb-2">
              Confirm Password
            </label>

            <input
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

        <div className="flex justify-center items-center gap-3 mt-6">
          <p>Already have an account?</p>

          <span
            onClick={() => navigate(-1)}
            className="text-blue-700 underline cursor-pointer"
          >
            Login
          </span>
        </div>

      </div>
    </div>
  );
}

export default Register;












































