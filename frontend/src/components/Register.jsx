import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link, data } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/register", {
        fullname,
        email,
        password,
        confirmpassword,
      });

      toast.success(response.data.message);
      if (response.data.access_token) {
        localStorage.setItem("authToken", response.data.access_token);
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <>
      <ToastContainer />
      <p className="text-2xl font-input text-center font-light mt-2">
        Register with us today!
      </p>
      <div className="mt-8">
        <form onSubmit={handleSubmit}>
          <fieldset className="p-0 ">
            <p className="text-sm font-input font-light">Full Name</p>
            <label className="input rounded-xl w-full">
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                type="text"
                placeholder="Enter Your Full Name"
              />
            </label>
          </fieldset>
          <div className="email mt-2">
            <p className="text-sm ont-input font-light">Work Email</p>
            <label className="input validator rounded-xl w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="mail@site.com"
                required
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <div className="choose-password mt-2">
            <p className="text-sm ont-input font-light">Choose Password</p>
            <label className="input validator rounded-xl w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="Minimum 8 Characters"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <p className="validator-hint hidden ">
              Must be more than 8 characters, including
              <br />
              At least one number
              <br />
              At least one lowercase letter
              <br />
              At least one uppercase letter
            </p>
          </div>
          <div className="choose-password mt-2">
            <p className="text-sm ont-input font-light">Confirm Password</p>
            <label className="input validator rounded-xl w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="Minimum 8 Characters"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number
              <br />
              At least one lowercase letter
              <br />
              At least one uppercase letter
            </p>
          </div>
          <button
            type="submit"
            className="rounded-md bg-orange-primary text-white p-2 w-full font-bold mt-3"
          >
            Register
          </button>
        </form>
      </div>
      <div className="w-full text-center mt-3">
        <Link
          className="text-orange-primary text-input underline text-sm font-light text-center"
          to={"/login"}
        >
          I'm Already A User
        </Link>
      </div>
    </>
  );
};

export default Register;
