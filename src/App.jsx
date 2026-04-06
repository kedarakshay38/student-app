import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import AddStudent from "./pages/AddStudent"
import StudentList from "./pages/StudentList"
import useThemeStore from "./store/useThemeStore"

function Navbar() {
  const location = useLocation()
  const { theme, toggleTheme } = useThemeStore()

  const links = [
    { to: "/",         label: "Home",        icon: "pi pi-home" },
    { to: "/add",      label: "Add Student", icon: "pi pi-user-plus" },
    { to: "/students", label: "Students",    icon: "pi pi-users" },
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-dark brand-navbar shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2 fs-5" to="/">
          <i className="pi pi-graduation-cap" style={{ fontSize: "1.4rem" }} />
          StudentHub
        </Link>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto gap-1">
            {links.map(({ to, label, icon }) => (
              <li className="nav-item" key={to}>
                <Link
                  className={`nav-link d-flex align-items-center gap-1 px-3 py-2 rounded ${location.pathname === to ? "nav-link-active" : ""}`}
                  to={to}
                >
                  <i className={icon} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="theme-toggle-btn ms-2" onClick={toggleTheme}>
            {theme === "ocean" ? (
              <>
                <i className="pi pi-moon" />
                Midnight
              </>
            ) : (
              <>
                <i className="pi pi-sun" />
                Ocean
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Navbar />
        <main className="container py-4 flex-grow-1">
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/add"      element={<AddStudent />} />
            <Route path="/students" element={<StudentList />} />
          </Routes>
        </main>
        <footer className="text-center py-3 border-top small" style={{ opacity: 0.6 }}>
          © 2026 StudentHub — Built with React, Bootstrap &amp; PrimeReact
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
