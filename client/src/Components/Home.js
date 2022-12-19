import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";




const Nodata =()=>{
  return(
    <>
    <tr   ><td className="d-flex justify-content-center"><b>No Data Found!</b></td></tr>
    </>
  )
}



function Home() {
  const [data, setData] = useState([]);

  const URl = `http://localhost:4000/api/v1/Curd`;
  const getData = async () => {
    try {
      const response = await axios.get(`${URl}/read`);
      let data = response.data.result;
      console.log(data.length)
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);




  const deleteHandler = async (id) => {
    // alert(id);
    try {
     let result = await axios.patch(`${URl}/delete/${id}`);
    //  console.log(result.data.msg)
     toast.success(result.data.msg)
      getData();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <div className="text-center">
        <div className="display-3">User List</div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            
            {

                data.length ===0 ?<Nodata/>:data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.designation}</td>
                  <td>
                    <NavLink
                      to={`/Update/${item.id}`}
                      className="btn btn-outline-warning btn-sm mx-2"
                    >
                      Update
                    </NavLink>
                    <button
                      onClick={() => deleteHandler(item.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
              
            
            
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
