import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { addUser } from "../services/api";

const initialData = {
  name: "",
  email: "",
  age: "",
  phone: "",
  profession: "",
  address: "",
  description: "",
};

const AddUser = () => {
  const [data, setData] = useState(initialData);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addUser(data);

    if(res.status === 201) {
      alert('User Registered');
      navigate('/');
    }else{
      alert('Something went wrong');
    }
  };

  return (
    <div className="container my-3">
      <div className="text-end">
        <NavLink to="/" className="text-decoration-none text-uppercase">
          Back to Home
        </NavLink>
      </div>
      <div>
        <h3 className="text-center text-uppercase mb-3 mt-2">
          Add your details
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
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-dark submit-btn text-uppercase"
          >
            Submit Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
