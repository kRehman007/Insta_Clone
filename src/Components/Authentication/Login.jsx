import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../../src/assets/images.png";
import img from "../../../src/assets/auth.png";
import { NavLink } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  function SubmitForm(data) {
    console.log("submitted");
    console.log(data.email);
  }
  return (
    <div className="flex space-x-2 justify-center  mt-[8%] lg:mt-[5%]">
      <div className="md:w-[40%] lg:w-[25%] hidden md:block">
        <img src={img} />
      </div>
      <div className="flex flex-col space-y-4 w-[75%] md:w-[40%] lg:w-[25%]">
        <form
          onSubmit={handleSubmit(SubmitForm)}
          className="border border-gray-200 "
        >
          <div className="flex flex-col items-center pt-12 pb-12 ">
            <div>
              <img src={logo} className="w-36" />
            </div>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="border rounded-sm bg-gray-100 border-gray-200 w-[80%] mt-12 px-3 py-2 placeholder:text-black text-sm 
              outline-none "
              placeholder="Email"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                maxLength: {
                  value: "8",
                  message: "Password must be of 8 characters",
                },
              })}
              className="border rounded-sm bg-gray-100 border-gray-200 w-[80%]  px-3 py-2  placeholder:text-black text-sm
              outline-none "
            />
            <br />
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-blue-500 w-[80%] px-3 py-2 rounded-md text-white"
            >
              Login
            </button>
            <br />
            <div className="flex space-x-2 items-center w-[80%]">
              <div className="border-b w-[100%]  border-b-gray-400"></div>
              <span>0R</span>
              <div className="border-b w-[100%] border-b-gray-400 bg-red-300"></div>
            </div>
          </div>
        </form>
        <div className="border border-gray-200 w-full flex justify-center pt-6 pb-6 space-x-1">
          <span>Don't have an account?</span>
          <NavLink to="/registration" className=" text-blue-500 font-semibold">
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
