import { Link } from "react-router-dom"
import useStudentStore from "../store/useStudentStore"

function Home() {
  const students = useStudentStore((state) => state.students)

  return (
    <div>
      <div className="text-center py-5">
        <i className="pi pi-graduation-cap" style={{ fontSize: "4rem", color: "#1a73e8" }} />
        <h1 className="mt-3 fw-bold">Welcome to StudentHub</h1>
        <p className="text-muted fs-5">Manage your students easily — add, view, and remove records in one place.</p>
      </div>

      <div className="row g-4 justify-content-center mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm text-center p-4">
            <i className="pi pi-users mb-2" style={{ fontSize: "2rem", color: "#1a73e8" }} />
            <h2 className="fw-bold display-6">{students.length}</h2>
            <p className="text-muted mb-0">Total Students</p>
          </div>
        </div>
      </div>

      <div className="row g-3 justify-content-center">
        <div className="col-md-4">
          <Link to="/add" className="btn btn-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2 fs-5 shadow-sm">
            <i className="pi pi-user-plus" />
            Add New Student
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/students" className="btn btn-outline-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2 fs-5 shadow-sm">
            <i className="pi pi-list" />
            View All Students
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
