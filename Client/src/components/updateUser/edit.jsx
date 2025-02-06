import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import "../adduser/add.css";
import "./edit.css"
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
  };
  const navigate = useNavigate()
  const { id } = useParams();
  const [user, setUser] = useState(users);
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // console.log(user);
  };
  useEffect(() => {
    axios
    .get(`https://backend-crud-gpnf.onrender.com/api/getone/${id}`)
    .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, [id]);
    const SubmitForm = async (e) => {
      e.preventDefault();
      await axios
      .put(`https://backend-crud-gpnf.onrender.com/api/update/${id}`, user)
      .then((response) => {
        toast.success(response.data.msg)
        navigate('/')
      })
      .catch((erorr) => {
        console.log(erorr);
      });
    };

  return (
    <>
      <Link to={"/"}>Back</Link>
      <h3>Update user</h3>
      <form className="addUserForm" onSubmit={SubmitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input
            onChange={inputChangeHandler}
            value={user.fname}
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
            onChange={inputChangeHandler}
            value={user.lname}
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
            onChange={inputChangeHandler}
            value={user.email}
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">Update USER</button>
        </div>
      </form>
    </>
  );
};

export default Edit;
