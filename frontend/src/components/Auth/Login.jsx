import React, { useState } from "react";
import Navbar from "../ui/shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const Login = () => {
    const [input , setInput] = useState({
        email:"",
        password:"",
        role:"",
    })

    const changeEventHandler =(e)=>{
        setInput({...input , [e.target.name]:e.target.value})
    };

    const changeFileHandler =(e)=>{
        setInput({...input , file:e.target.files?.[0]});
    }
    const submitHandler= async (e)=>{
      try {
          e.preventDefault();
          console.log(input);
      } catch (error) {
          console.log(error);
      }
    }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          
          <div className="my-2">
            <Label>Email</Label>
            <Input name="email"
              type="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Arvind@gmail.com" />
          </div>
          
          <div className="my-2">
            <Label>Password</Label>
            <Input name="password"
              type="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Arvind@123" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role==="Student"}
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
                  checked={input.role==="Recuritor"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r3">Recuritor</Label>
              </div>
            </RadioGroup>
            
          </div>
          <Button type="submit" className="w-full my-4 " >login</Button>
            <span>Don't have an Account? <Link to="/login" className="text-blue-600" >SignUp</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
