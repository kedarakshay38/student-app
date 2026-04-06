import { Link } from "react-router-dom"
import useStudentStore from "../store/useStudentStore"
import useThemeStore from "../store/useThemeStore"

function Home() {
  const students = useStudentStore((state) => state.students)
  const theme = useThemeStore((state) => state.theme)

  const isOcean = theme === "ocean"

  return (
    <div>
      {/* Hero */}
      <div className="hero-section p-5 mb-4 text-center">
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
          style={{
            width: 80,
            height: 80,
            background: isOcean
              ? "linear-gradient(135deg, #0077b6, #00b4d8)"
              : "linear-gradient(135deg, #7c3aed, #a78bfa)",
          }}
        >
          <i className="pi pi-graduation-cap text-white" style={{ fontSize: "2rem" }} />
        </div>
        <h1 className="fw-bold mb-2" style={{ fontSize: "2.4rem" }}>
          Welcome to{" "}
          <span style={{ color: "var(--brand-primary)" }}>StudentHub</span>
        </h1>
        <p className="fs-5 mb-0" style={{ opacity: 0.7, maxWidth: 500, margin: "0 auto" }}>
          Add, manage, and track your students — all in one place.
        </p>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4 justify-content-center">
        <div className="col-sm-6 col-md-4">
          <div className="card stat-card text-white text-center p-4 shadow">
            <i className="pi pi-users mb-2" style={{ fontSize: "2rem" }} />
            <div className="display-5 fw-bold">{students.length}</div>
            <div className="opacity-75 mt-1">Enrolled Students</div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card stat-card text-white text-center p-4 shadow">
            <i className="pi pi-book mb-2" style={{ fontSize: "2rem" }} />
            <div className="display-5 fw-bold">
              {new Set(students.map((s) => s.course).filter(Boolean)).size}
            </div>
            <div className="opacity-75 mt-1">Active Courses</div>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="row g-3 justify-content-center">
        <div className="col-md-4">
          <Link
            to="/add"
            className="btn brand-btn-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2 fs-5 rounded-3 shadow"
          >
            <i className="pi pi-user-plus" />
            Add New Student
          </Link>
        </div>
        <div className="col-md-4">
          <Link
            to="/students"
            className="btn brand-btn-outline w-100 py-3 d-flex align-items-center justify-content-center gap-2 fs-5 rounded-3 shadow"
          >
            <i className="pi pi-list" />
            View All Students
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
