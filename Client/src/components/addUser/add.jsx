import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./add.css";
import { toast } from "react-hot-toast";

const Add = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate()
  const [user, setUser] = useState(users);
  const InputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3000/api/create", user)
      .then((Response) => {
        toast.success(Response.data.msg);
        navigate('/')
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="addUser">
      <Link to={"/"}>Back</Link>
      <h3>Add new user</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input
            onChange={InputHandler}
            type="text"
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="First name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last name</label>
          <input
            onChange={InputHandler}
            type="text"
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="Last name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            onChange={InputHandler}
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            onChange={InputHandler}
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="password"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">ADD USER</button>
        </div>
      </form>
    </div>
  );
};
export default Add;
