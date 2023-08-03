import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";

const TableUser = (props) => {
  const [listUser, setListUser] = useState([
    {
      id: 11,
      username: "caochien",
      email: "nhfssuf@gmail.com",
      role: "USER",
    },
    {
      id: 10,
      username: "chien123",
      email: "chien@gmail.com",
      role: "USER",
    },
  ]);

  useEffect(() => {
    fetchListUsers();
  }, []);
  const fetchListUsers = async () => {
    let res = await getAllUser();
    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={`table-users-${index}`}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn btn-primary">View</button>
                    <button className="btn btn-warning mx-3">Update</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
