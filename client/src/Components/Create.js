import React, { useState } from "react";
// import validator from "validator";
import { toast } from "react-toastify";
import axios from "axios";

function Create() {
  const [regUser, setRegUser] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    password: "",
  });

  const [buttonStatus, setButtonStatus] = useState(false)

  const readValue = (e) => {
    const { name, value } = e.target;
    setRegUser({ ...regUser, [name]: value });
  };

  const URl = `http://localhost:4000/api/v1/Curd`;

  const submitHandler = async (e) => {
    e.preventDefault();

    // console.log("Insert data:-", regUser);
    try {
      setButtonStatus(true)
      const result = await axios.post(`${URl}/create`, regUser);
      //  console.log(result.data)
      toast.success(result.data.msg);
      setButtonStatus(false)
    } catch (err) {
      toast.error(err.response.data.msg);
      setButtonStatus(false)
      // console.log(err.response.data.msg)
    }
  };
  return (
    <div className="container">
      <div className="text-center">
        <div className="display-3">Create User</div>
      </div>
      <div className="row">
        <div className="offset-md-3 col-md-6 my-2">
          <div className="card">
            <div className="card-header text-center">
              <b>User Info</b>
            </div>
            <div className="card-body">
              <form autoComplete="off" onSubmit={submitHandler}>
                <div className="input-group my-3 ">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-person-circle"></i>
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="User Name"
                    onChange={readValue}
                    required
                  />
                </div>
                <div className="input-group my-3 ">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-envelope-at-fill"></i>
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="User Email"
                    onChange={readValue}
                    required
                  />
                </div>
                <div className="input-group my-3 ">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-phone-fill"></i>
                  </span>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="User phone"
                    onChange={readValue}
                    required
                  />
                </div>
                <div className="input-group my-3 ">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-briefcase-fill"></i>
                  </span>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    className="form-control"
                    placeholder="User Designation"
                    onChange={readValue}
                    required
                  />
                </div>
                <div className="input-group my-3 ">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-key-fill"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="User Password"
                    onChange={readValue}
                    required
                  />
                </div>
               
                <div className="input-group my-3 d-flex justify-content-center">
                  <button disabled={buttonStatus} type="submit" className="btn btn-outline-success ">
                    <i className="bi bi-door-open-fill mx-1"></i> Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
