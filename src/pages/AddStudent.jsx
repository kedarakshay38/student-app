import StudentForm from "../components/StudentForm"
import { Link } from "react-router-dom"

function AddStudent() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card brand-card rounded-3 overflow-hidden">
          <div
            className="card-header py-3 px-4 d-flex align-items-center gap-2 text-white"
            style={{ background: "linear-gradient(135deg, var(--navbar-from), var(--navbar-to))" }}
          >
            <i className="pi pi-user-plus fs-5" />
            <h5 className="mb-0 fw-semibold">Add New Student</h5>
          </div>
          <div className="card-body p-4">
            <StudentForm />
          </div>
        </div>

        <div className="mt-3">
          <Link to="/" className="text-decoration-none small" style={{ color: "var(--brand-primary)" }}>
            <i className="pi pi-arrow-left me-1" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddStudent
