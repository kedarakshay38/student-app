import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import AddStudent from "./pages/AddStudent"
import StudentList from "./pages/StudentList"

function Navbar() {
  const location = useLocation()

  const links = [
    { to: "/", label: "Home", icon: "pi pi-home" },
    { to: "/add", label: "Add Student", icon: "pi pi-user-plus" },
    { to: "/students", label: "Students", icon: "pi pi-users" },
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "linear-gradient(135deg, #1a73e8, #0d47a1)" }}>
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <i className="pi pi-graduation-cap fs-4" />
          StudentHub
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-1">
            {links.map(({ to, label, icon }) => (
              <li className="nav-item" key={to}>
                <Link
                  className={`nav-link d-flex align-items-center gap-1 px-3 py-2 rounded ${location.pathname === to ? "active bg-white bg-opacity-25 fw-semibold" : ""}`}
                  to={to}
                >
                  <i className={icon} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: "#f0f4f8" }}>
        <Navbar />
        <main className="container py-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/students" element={<StudentList />} />
          </Routes>
        </main>
        <footer className="text-center py-3 text-muted small border-top bg-white">
          © 2026 StudentHub — Built with React & PrimeReact
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
