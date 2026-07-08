import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/authapi";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const change = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitform = async (event) => {
    event.preventDefault();

    try {
      await registerUser(formData);
      const roleLabel = formData.role === "teacher" ? "Teacher" : "Student";
      window.alert(`${roleLabel} account registered successfully`);
      navigate("/login");
    } catch (err) {
      console.log(err.response?.data || err.message);
      if (!err.response) {
        alert("Network/CORS error. Check backend status and CORS configuration.");
      } else if (err.response?.status === 409) {
        alert("Email already exists.");
      } else {
        alert(err.response.data?.message || "Registration failed.");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-linear-to-r from- black-50 via-gray-600 to-pink-30">
      <form
        onSubmit={submitform}
        className="rounded-lg bg-white p-7 px-20 shadow-lg"
      >
        <h1 className="p-3 text-center text-xl font-bold">Register Form</h1>

        <div className="mb-2 flex flex-col">
          <label className="m-1">Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            autoComplete="name"
            value={formData.name}
            className="mb-4 rounded-md border-2 border-gray-300 p-2"
            onChange={change}
          />
        </div>

        <div className="mb-2 flex flex-col">
          <label className="m-1">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            autoComplete="email"
            value={formData.email}
            className="mb-4 rounded-md border-2 border-gray-300 p-2"
            onChange={change}
          />
        </div>

        <div className="mb-2 flex flex-col">
          <label className="m-1">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            autoComplete="new-password"
            value={formData.password}
            className="mb-4 rounded-md border-2 border-gray-300 p-2"
            onChange={change}
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="m-1">Select Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={change}
            className="rounded-md border-2 border-gray-300 p-2"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <p className="mt-2 text-sm text-gray-500">
            Teachers can answer questions and manage their earnings.
          </p>
        </div>

        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
        >
          Submit
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?
          <Link to="/login" className="ml-1 text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register
