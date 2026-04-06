import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import AddStudent from "./pages/AddStudent"
import StudentList from "./pages/StudentList"

function App() {

  // Never use a regular <a> tag for internal navigation in React.
  //  A normal <a> reloads the entire page — you lose all your state. Link changes the URL without a reload. This is called client-side navigation.
  return (
    
   <BrowserRouter>
     <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add Student</Link>
        <Link to="/students">Student List</Link>
      </nav>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add" element={<AddStudent />} />
    <Route path="/students" element={<StudentList />} />  
   </Routes>

    </BrowserRouter>
  )
}

export default App
