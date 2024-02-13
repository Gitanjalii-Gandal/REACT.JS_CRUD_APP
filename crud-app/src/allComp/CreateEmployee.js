import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios"; 

           
export default function CreateEmployee(){
    const[eid,setId]=useState();
    const[ename,setName]=useState();
    const[email,setMail]=useState();
    const nav=useNavigate();
    const updateId=(e)=>{
        setId(e.target.value);
    }
    const updateName=(e)=>{
        setName(e.target.value);
    }
    const updateMail=(e)=>{
        setMail(e.target.value);
    }
    const saveEmp=()=>{
        const emp={"id":eid,"name":ename,"mail":email};
        console.log(emp);
        axios.post("http://localhost:3000/employee",emp)
        .then(()=>{
            alert("employee added successfully");
            nav("/emp");
        })
    }
    return <>
  <div class="card text-center">
  <div class="card-header">
   <h4>Add Employee</h4>
  </div>
  <div class="card-body">
    <p class="card-text"> <b>Emp ID = </b><input type="text" onChange={updateId}></input></p>
    <p class="card-text"><b>Name = </b><input type="text" onChange={updateName}></input> </p>
    <p class="card-text"> <b>Mail ID = </b><input type="text" onChange={updateMail}></input></p>
  </div>
  <div class="card-footer ">
  <button onClick={saveEmp}class="btn btn-primary"><h5>Add Employee</h5></button>
  </div>
</div>
    </>
    

}
