import React from "react";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const UserInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4000/user/signup", UserInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Succesfull");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="">
        <div
          id="my_modal_4"
          className="flex h-screen items-center justify-center  dark:bg-slate-900 dark:text-white "
        >
          <div className=" border-[2px] sadow-md p-5 rounded-md ">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              {/*Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  {...register("fullname", { required: true })}
                  placeholder="Enter your Name"
                  className="w-80  px-3 border rounded-md outline-none"
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="w-80  px-3 border rounded-md outline-none"
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/*password*/}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  {...register("password", { required: true })}
                  placeholder="Enter your Password"
                  className="w-80  px-3 border rounded-md outline-none"
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/*Button */}

              <div className="flex mt-4 justify-around">
                <button className="bg-pink-500 px-3 py-1 rounded-md hover:bg-pink-700 duration-300 text-white ">
                  Signup
                </button>
                <p className="px-4 py-1">
                  Already have account ?{" "}
                  <button
                    className="text-blue-500 cursor-pointer underline"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
