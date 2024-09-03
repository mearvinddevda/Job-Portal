import React, { useState } from "react";
import Navbar from "../ui/shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
const Signin = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate =useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("pasword", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file",input.file);
    } 
    try {
      const res = axios.post(`${USER_API_END_POINT}/register` , formData,{
        header:{
          "Content-Type":"multipart/form-data"
        },
      withCredentials:true,
      });
      if(res.data.message){
        navigate.apply("/login")
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">SignUp</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Arvind"
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Arvind@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              name="phoneNumber"
              type="text"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="+91 8269072934"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Arvind@123"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recuritor"
                  checked={input.role === "Recuritor"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r3">Recuritor</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                onChange={changeFileHandler}
                type="file"
                className="cursor-pointer"
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4 ">
            SignUp
          </Button>
          <span>
            Already have an Account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signin;
