import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../services/api";

const initialData = {
  name: "",
  email: "",
  age: "",
  phone: "",
  profession: "",
  address: "",
  description: "",
};

const EditUser = () => {
  const [data, setData] = useState(initialData);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateUser(data, id);

    if(res.status === 200) {
        alert('User updated');
        navigate('/')
    }else{
        alert('Something went wrong');
    }
  };

  useEffect(() => {
    getSingUser();
  }, []);

  // Get Single User Details with Specific Id
  const getSingUser = async () => {
    const {data} = await getUser(id);
    setData(data);
  }

  return (
    <div className="container my-3">
      <div className="text-end">
        <NavLink to="/" className="text-decoration-none text-uppercase">
          Back to Home
        </NavLink>
      </div>
      <div>
        <h3 className="text-center text-uppercase mb-3 mt-2">
          Edit your details
        </h3>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputAge" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputAge"
              name="age"
              onChange={handleChange}
              value={data.age}
              required
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPhone"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              required
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputWork" className="form-label">
              Profession
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputWork"
              name="profession"
              onChange={handleChange}
              value={data.profession}
              required
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputAdress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputAdress"
              name="address"
              value={data.address}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleTextArea" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id=""
              rows="4"
              name="description"
              onChange={handleChange}
              value={data.description}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-dark submit-btn text-uppercase"
          >
            Update Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;