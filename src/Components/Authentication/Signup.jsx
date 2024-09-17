import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../../../src/assets/images.png";
import img from "../../../src/assets/auth.png";
const Signup = () => {
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
    <div
      className="flex flex-col justify-center relative
    left-[50%] translate-x-[-50%] mt-[2%] space-y-4 w-[75%] md:w-[40%] lg:w-[30%]"
    >
      <form
        onSubmit={handleSubmit(SubmitForm)}
        className="border border-gray-200 "
      >
        <div className="flex flex-col justify-center  items-center pt-12 pb-12 ">
          <div>
            <img src={logo} className="w-36" />
          </div>
          <p className="font-medium mt-2">
            Signup to see photos and videos
            <br /> from your friends
          </p>
          <br />
          <div className="flex space-x-2 items-center w-[80%]">
            <div className="border-b w-[90%]  border-b-gray-300"></div>
            <span>0R</span>
            <div className="border-b w-[90%] border-b-gray-300 bg-red-300"></div>
          </div>
          <input
            type="email"
            {...register("email", {
              required: { value: true, message: "Field is required" },
            })}
            className="border border-gray-200 w-[80%] mt-6 
           rounded-sm bg-gray-100 px-3 py-2 placeholder:text-black text-sm 
          outline-none "
            placeholder="Email"
          />
          {errors.email && (
            <div className="text-red-400 text-sm">{errors.email.message}</div>
          )}
          <input
            type="text"
            {...register("fullname", {
              required: { value: true, message: "Field is required" },
            })}
            className="border border-gray-200 w-[80%] mt-2
           rounded-sm bg-gray-100 px-3 py-2 placeholder:text-black text-sm 
          outline-none "
            placeholder="FullName"
          />
          {errors.fullname && (
            <div className="text-red-400 text-sm">
              {errors.fullname.message}
            </div>
          )}
          <input
            type="text"
            {...register("username", {
              required: { value: true, message: "Field is required" },
            })}
            className="border border-gray-200 w-[80%]
          mt-2 rounded-sm bg-gray-100  px-3 py-2 placeholder:text-black text-sm 
          outline-none "
            placeholder="Username"
          />
          {errors.username && (
            <div className="text-red-400 text-sm">
              {errors.username.message}
            </div>
          )}
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: {
                value: "8",
                message: "Password must be of 8 characters",
              },
            })}
            className="border border-gray-200 w-[80%] 
          mt-2 rounded-sm bg-gray-100 px-3 py-2  placeholder:text-black text-sm
          outline-none "
          />
          {errors.password && (
            <div className="text-red-400 text-sm">
              {errors.password.message}
            </div>
          )}

          <p className="px-2 mt-3 w-[80%] text-xs text-gray-500 ">
            People who use services may have uploaded you contact information on
            instagram.
          </p>

          <br />
          <p className="px-2 mb-3 w-[80%] text-xs text-gray-500 ">
            By signing up, you agree to our Terms, Privacy Policy, Cooking
            Policy
          </p>
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-blue-500 w-[80%] px-3 py-2 rounded-md text-white"
          >
            Signup
          </button>
        </div>
      </form>
      <div className="border border-gray-200 w-full flex justify-center pt-6 pb-6 space-x-1">
        <span>Have an account?</span>
        <NavLink to="/authentication" className=" text-blue-500 font-semibold">
          Log in
        </NavLink>
      </div>
    </div>
  );
};

export default Signup;
