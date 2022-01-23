import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function About() {
  const params = useParams();
  const [users, setUsers] = useState();

  useEffect(async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/users/${params?.id}`;
      const data = await axios.get(url);
      setUsers(data?.data);
    } catch (err) {
      console.log(err, "ERROR");
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="card mt-2">
        <div className="card-body">
          <h5 className="card-title">Name : {users?.name}</h5>
          <h5 className="card-title">UserName: {users?.username}</h5>
          <h5 className="card-title">Email : {users?.email}</h5>
          <h5 className="card-title">Phone : {users?.phone}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            WebSite : <a href={users?.website}>{users?.website}</a>
          </h6>
          <p className="card-text">{users?.company?.catchPhrase}</p>
          <Link to={`/`} className="btn btn-info btn-sm">
            back
          </Link>
        </div>
      </div>
    </div>
  );
}
