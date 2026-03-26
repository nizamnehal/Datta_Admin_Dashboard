import { Link } from "react-router-dom";
import img from "/src/assets/images/logo-dark.svg";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-[420px] p-10 rounded shadow">

        {/* Logo */}
        <div className="flex items-center justify-center mb-6 ">
          <img src={img} alt="logo and text" className="w-32" />
        </div>

        {/* Title */}
        <h3 className="text-center text-2xl font-semibold mb-6">
          Sign up
        </h3>

        {/* First + Last Name */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="border rounded px-4 py-3 outline-none focus:ring-1 focus:ring-gray-300"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="border rounded px-4 py-3 outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded px-4 py-3 mb-4 outline-none focus:ring-1 focus:ring-gray-300"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded px-4 py-3 mb-4 outline-none focus:ring-1 focus:ring-gray-300"
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border rounded px-4 py-3 mb-4 outline-none focus:ring-1 focus:ring-gray-300"
        />

        {/* Terms */}
        <label className="flex items-center gap-2 text-gray-600 mb-6">
          <input type="checkbox" className="accent-blue-500" />
          I agree to all the Terms & Condition
        </label>

        {/* Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded mb-6">
          Sign up
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-600">
          Already have an Account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;