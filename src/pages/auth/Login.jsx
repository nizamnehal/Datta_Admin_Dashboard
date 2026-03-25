import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-[420px] p-10 rounded shadow">

        {/* Logo */}
        <div className="flex items-center justify-center mb-6 ">
          <img src="/src/assets/images/logo-dark.svg" alt="logo and text" className="w-32" />
        </div>

        {/* Title */}
        <h3 className="text-center text-2xl font-semibold mb-6">
          Login
        </h3>

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

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between mb-6">

          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="accent-blue-500" />
            Remember me?
          </label>

          <Link
            to="#"
            className="text-blue-500 hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded mb-6">
          Login
        </button>

        {/* Create account */}
        <p className="text-center text-gray-600">
          Don't have an Account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline"
          >
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;