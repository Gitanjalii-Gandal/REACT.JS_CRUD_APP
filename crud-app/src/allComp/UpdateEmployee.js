import axios from "axios";
import { useState } from "react";
export default function UpdateEmployee(){

    const[eid,setId]=useState();
    const[ename,setName]=useState();
    const [email,setMail]=useState();
    const baseURL = 'http://localhost:3000/employee';
    const updateId=(e)=>{
        setId(e.target.value);
    }
    const updateName=(e)=>{
        setName(e.target.value);
    }
    const updateMail=(e)=>{
        setMail(e.target.value);
    }
    const viewEmp=()=>{
        axios.get(`${baseURL}/${eid}`)
        .then((res)=>{
            console.log(res.data);
            const e=res.data;
            setName(e.name);
            setMail(e.mail);
        })}
const updateEmp=()=>{
    axios.put("http://localhost:3000/employee/" +eid,{"name":ename,"mail":email})
    .then(()=>{
        alert("Update The Employee Successfully");
    })
}
    return <>
    <div class="card text-center">
  <div class="card-header">
  <h2>Update Employee</h2>
  </div>
  <div class="card-body">
    {/* <h5 class="card-title">Special title treatment</h5> */}
    <p class="card-text"><b>Emp ID = </b><input type="text" onChange={updateId}></input></p>
    <p class="card-text"> <b>Name = </b><input type="text" value={ename} onChange={updateName}></input></p>
    <p class="card-text"></p>
    <a href="#" onClick={viewEmp} class="btn btn-primary"><center><b>View Employee ID</b></center></a><br></br><br></br>
    <p class="card-text">   <b>Mail Id = </b><input type="text" value={email} onChange={updateMail}></input></p>


  </div>
  <div class="card-footer ">
  <button onClick={updateEmp} class="btn btn-primary"><b>Update Employee</b></button>
  </div>
</div>



     {/* <center>
    <h2>Update Employee</h2>
    <br></br>
   
    <b>Emp ID = </b><input type="text" onChange={updateId}></input><br></br><br></br>
    <button onClick={viewEmp}><b>View</b></button><br></br><br></br>
    <b>Name = </b><input type="text" value={ename} onChange={updateName}></input><br></br><br></br>
   <b>Mail Id = </b><input type="text" value={email} onChange={updateMail}></input><br></br><br></br>
    <button onClick={updateEmp}><b>Update Employee</b></button>
    </center> */}
    </>
}



