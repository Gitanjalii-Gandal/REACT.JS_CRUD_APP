import axios from 'axios';
import { useState } from 'react';

const ViewEmpByIdComp = () => {
  const [id, setId] = useState(34);
  const [emp, setEmp] = useState({});
  const baseURL = 'http://localhost:3000/employee';

  const viewEmp = () => {
    axios.get(`${baseURL}/${id}`)
      .then((res) => {
        console.log(res.data);
        setEmp(res.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  };
return (
    <>
    <div class="card text-center">
  <div class="card-header">
  <h3>View Employee By Id</h3>
  </div>
  <div class="card-body">
    <p class="card-text"><b>Search Id := </b><input type="text" onChange={(e) => { setId(e.target.value); }}></input></p>
    <button onClick={viewEmp} class="btn btn-primary">View</button>
    <p class="card-text">  <h2>Employee Data</h2></p>
    {Object.keys(emp).length === 0 ? (
        <p><h4>No Employee Data Available</h4></p>
      ) : (
        <h5>
          Id:= {emp.id}<br />
          Name:= {emp.name}<br />
          Mail Id:= {emp.mail}
        </h5>
      )}
  </div>
  </div></>
  );
};

export default ViewEmpByIdComp;


