import React from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async(data) => {
    const UserInfo ={
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4000/user/login",UserInfo)
    .then((res) =>{
      console.log(res.data);
      if(res.data){
        toast.success("Login Succesfull");
        document.getElementById("my_modal_3").close();
        setTimeout(() =>{
          
          window.location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.user));
        },1000);
        
      }
      
    }).catch((err) =>{
      if(err.response){
        console.log(err);
        toast.error("Error: " + err.response.data.message)
        setTimeout(() =>{},2000);
      }
    })
  }

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  dark:bg-slate-900 dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80  px-3 border rounded-md outline-none"
              {...register("email", { required: true })} 
            />
            <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/*password*/}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Password"
              className="w-80  px-3 border rounded-md outline-none"
              {...register("password", { required: true })} 
            />
            <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/*Button */}

          <div className="flex mt-4 justify-around">
            <button className="bg-pink-500 px-3 py-1 rounded-md hover:bg-pink-700 duration-300 ">
              Login
            </button>
            <p className="px-4 py-1">
              Not registered ?{" "}
              <Link
                to="/Signup"
                className="text-blue-500 cursor-pointer underline"
              >
                Signup
              </Link>
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
