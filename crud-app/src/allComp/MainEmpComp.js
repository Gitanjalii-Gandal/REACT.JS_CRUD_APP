
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

import ViewEmpById from './ViewEmpById';
import ListEmployee from './ListEmployee';
import UpdateEmployee from './UpdateEmployee';
import DeleteEmployee from './DeleteEmployee';
import CreateEmployee from './CreateEmployee';
export default function MainEmpComp() {
    return <>
    <center>
    <h2 className="mb-2 mt-4">Main Employee Component</h2>
    </center>
     <Navbar bg="info" data-bs-theme="light" text="dark">
<Container>
  <Navbar.Brand href="/"><h3>Employee</h3></Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/emp"><h5>ViewAll</h5></Nav.Link>
    <Nav.Link href="/add"><h5>Create</h5></Nav.Link>
    <Nav.Link href="/update"><h5>Update</h5></Nav.Link>
    <Nav.Link href="/delete"><h5>Delete</h5></Nav.Link>
    <Nav.Link href="/view"><h5>ViewById</h5></Nav.Link>
  </Nav>
 </Container>
</Navbar>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<ListEmployee/>}/>
          <Route path="/emp" element={<ListEmployee />} />
          <Route path="/add" element={<CreateEmployee />} />
          <Route path="/update" element={<UpdateEmployee />} />
          <Route path="/delete" element={<DeleteEmployee />} />
          <Route path="/view" element={<ViewEmpById />} />
       </Routes>
    </BrowserRouter>
</>
}




