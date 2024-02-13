import axios from "axios";
import { useState } from "react";
export default function DeleteEmployee(){
const[id,setId]=useState();
const deleteEmp=()=>{
    axios.delete("http://localhost:3000/employee/"+id)
    .then(()=>{
        alert("Deleted Successfully");
    }).catch((err)=>{
        console.log(err);
    })
}
return<>

<div class="card text-center">
  
  <div class="card-body">
    <h5 class="card-title">Delete Employee</h5>
    <p class="card-text"><b>ID = </b><input type="text" onChange={(e)=>{setId(e.target.value)}}></input></p>
    <button onClick={deleteEmp} class="btn btn-primary">Delete</button><br></br>
   
  </div>
  
</div>

</>
}
