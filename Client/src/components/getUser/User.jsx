import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./user.css";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/api/getall");
      setUsers(response.data);
    };

    fetchData();
  }, []);

  const deleteUser =async(userID)=>{
    await axios.delete(`http://localhost:3000/api/delete/${userID}`)
    .then((response)=>{
      setUsers((prevValue)=>prevValue.filter((user)=>user._id !== userID))
      console.log(response);
      toast.success(response.data.masg)
      
    })
    .catch((error)=>{
        console.log(error);
      })


  }
  return (
    <>
      <div className="userTable">
        <Link to={"/add"} className="addButton">
          Add User
        </Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>Sr.NO</th>
              <th>User Name </th>
              <th>user Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users, index) => {
              return (
                <tr key={users._id} >
                  <td>{index + 1}</td>
                  <td>{users.fname}{users.lname}</td>
                  <td>{users.email}</td>
                  <td className="actionButtons">
                    <button>
                      <i className="fa-solid fa-trash" onClick={()=>deleteUser(users._id)} ></i>
                    </button>
                    <Link to={`/edit/`+ users._id }>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
