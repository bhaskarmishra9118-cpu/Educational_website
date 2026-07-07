import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../features/authSlice";
import { loginUser } from "../api/authapi";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const change = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const login = async (event) => {
    event.preventDefault();
    dispatch(loginStart());

    try {
      const res = await loginUser(formData);
      if (res.data.success) {
        dispatch(loginSuccess(res.data));
        if (res.data.user.role === "teacher") {
          navigate("/teacher");
        } else {
          navigate("/student");
        }
      }
    } catch (err) {
      dispatch(loginFailure(err.response?.data?.message || err.message));
      if (!err.response) {
        alert("Network/CORS error. Check backend URL and CORS settings.");
      } else {
        alert(err.response.data?.message || "Login failed ❌");
      }
    }
  };

  return (
    <div className="m-3 flex h-screen items-center justify-center rounded-lg bg-gradient bg-gray-700 from-indigo-300 via-purple-30 to-blue-200 shadow-md">
      <form
        onSubmit={login}
        className="border-y-black bg-white p-7 px-15 shadow-lg rounded-lg"
      >
        <h1 className="p-3 px-20 py-5 font-bold">Login</h1>

        <div className="mb-2 flex flex-col">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            autoComplete="email"
            className="mb-4 rounded-md border-2 border-gray-300 p-2"
            onChange={change}
          />
        </div>

        <div className="mb-2 flex flex-col">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            autoComplete="current-password"
            className="mb-4 rounded-md border-2 border-gray-300 p-2"
            onChange={change}
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
        >
          Submit
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
