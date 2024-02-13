import { useEffect,useState } from "react";
import axios from "axios";

export default function ListEmployee(){
    const[emps,setEmps] = useState([{"id":101, "name":"Jay","mail":"jay@gmail.com"},
{
    "id":401,
    "name":"jay",
    "mail":"jay@gmail.com"
}]);
useEffect(()=>{
    getEmpfromJsonDB();
})
const getEmpfromJsonDB=()=>{
    axios.get("http://localhost:3000/employee")
    .then((res)=>{
        setEmps(res.data);
    })
}
return<>
<table className="table table-borderd table-info">
    <thead>
        <tr>
            <th>Eid</th>
            <th>Name</th>
            <th>Mail Id</th>
        </tr>
    </thead>
    <tbody>
        {
            emps.map(emp=>(
                <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.mail}</td>
                </tr>
            )
            )
        }
    </tbody>
</table>
</>
}
