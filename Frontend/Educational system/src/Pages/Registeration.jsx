import { useState } from "react"
import { Link } from "react-router-dom"
//import { api } from "../lib/api"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const change = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const submitform = async (event) => {
    event.preventDefault()

    // try {
    //   await api.post("/auth/register", formData, { withCredentials: false })
    //   window.alert("User Registered Successfully")
    // } catch (err) {
    //   console.log(err.response?.data || err.message)
    //   if (!err.response) {
    //     alert("Network/CORS error. Check Render CORS_ORIGINS and backend status.")
    //   } else if (err.response?.status === 409) {
    //     alert("Email Already Exist ")
    //   } else if (err.response?.status === 400 && err.response?.data?.message === "All fields are required") {
    //     alert("All fields are required")
    //   } else if (err.response?.status === 400 && err.response?.data?.message === "Invalid email format") {
    //     alert("Invalid email format")
    //   } else if (err.response?.status === 400 && err.response?.data?.message === "Password must be at least 6 characters") {
    //     alert("Password must be at least 6 characters")
    //   }
    // }
  }

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
            className="mb-4 rounded-md border-2 border-gray-300 p-2"
            onChange={change}
          />
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
