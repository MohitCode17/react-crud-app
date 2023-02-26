import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import avatar from "../assets/avatar.png";
import { getUser } from "../services/api";

const UserCard = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getSingUser();
  }, []);

  const getSingUser = async () => {
    const { data } = await getUser(id);
    setData(data);
  };

  return (
    <div className="container mt-5 card-container">
      <h2 className="text-center text-uppercase mb-3">Welcome {data.name}</h2>
      <div className="card" style={{ width: "700px", margin: "0 auto" }}>
        <div className="card-body">
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src={avatar} alt="profile" width={60} />
              <h4 className="mt-3">
                Name: <span>{data.name}</span>
              </h4>
              <p className="mt-3">
                Age: <span>{data.age}</span>
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i>{" "}
                <span>{data.email}</span>
              </p>
              <p>
                <i className="fa-solid fa-user-tie"></i>{" "}
                <span>{data.profession}</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-5">
                <i className="fa-solid fa-phone"></i> <span>{data.phone}</span>
              </p>
              <p className="mt-3">
                <i className="fa-solid fa-location-dot"></i>{" "}
                <span>{data.address}</span>
              </p>
              <p className="mt-3">
                <strong>Description:</strong> <span>{data.description}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
