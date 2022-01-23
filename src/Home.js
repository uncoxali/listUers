import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUser] = useState();

  const getAllUsers = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/users`;
      const data = await axios.get(url);
      setUser(data.data);
    } catch (err) {
      console.log(err, "Error Url");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleDelete = async (item) => {
    const data = users.filter((user) => user.id !== item);
    setUser(data);
  };

  return (
    <div className="container mt-5">
      {users?.map((item, index) => (
        <div key={index} className="card mt-2">
          <div className="card-body">
            <h5 className="card-title">Name : {item.name}</h5>
            <h5 className="card-title">UserName: {item.username}</h5>
            <h5 className="card-title">Email : {item.email}</h5>
            <h5 className="card-title">Phone : {item.phone}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              WebSite : <a href={item.website}>{item.website}</a>
            </h6>
            <p className="card-text">{item.company.catchPhrase}</p>
            <Link to={`about/${item.id}`} className="btn btn-info btn-sm">
              visit
            </Link>
          </div>
          <button
            onClick={() => handleDelete(item?.id)}
            className="btn btn-danger btn-sm"
          >
            {" "}
            delete
          </button>
        </div>
      ))}
    </div>
  );
}
