import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllUsers, deleteUser } from "../services/api";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const { data } = await getAllUsers();
    setUsers(data);
  };

  const userDelete = async (id) => {
    const res = await deleteUser(id);
    if(res.status === 200) {
      alert('User Deleted');
      getUsers();
    }
  }

  return (
    <>
      <div className="container add-btn mt-4 text-end">
        <NavLink to="/add" className="btn btn-dark">
          <i className="fa-solid fa-plus"></i> Add User
        </NavLink>
      </div>
      <div className="container mt-3">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Profession</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.profession}</td>
                <td>{user.phone}</td>
                <td className="d-flex justify-content-around">
                  <NavLink to={`/view/${user.id}`} className="btn">
                    <i className="fa-solid fa-eye"></i>
                  </NavLink>
                  <NavLink to={`/edit/${user.id}`} className="btn">
                    <i className="fa-solid fa-pen"></i>
                  </NavLink>
                  <NavLink className="btn" onClick={() => userDelete(user.id)} >
                    <i className="fa-solid fa-trash"></i>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
