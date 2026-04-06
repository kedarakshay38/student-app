import { Link } from "react-router-dom"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Button } from "primereact/button"
import { Tag } from "primereact/tag"
import useStudentStore from "../store/useStudentStore"

const courseMeta = {
  React:    { severity: "info",    icon: "pi-code" },
  "Node.js":{ severity: "success", icon: "pi-server" },
  Python:   { severity: "warning", icon: "pi-cog" },
  Design:   { severity: "danger",  icon: "pi-palette" },
}

function StudentList() {
  const students = useStudentStore((state) => state.students)
  const deleteStudent = useStudentStore((state) => state.deleteStudent)

  const courseBody = (row) => {
    const meta = courseMeta[row.course] ?? { severity: "secondary", icon: "pi-book" }
    return (
      <Tag
        value={row.course}
        severity={meta.severity}
        icon={`pi ${meta.icon}`}
      />
    )
  }

  const actionsBody = (row) => (
    <Button
      icon="pi pi-trash"
      severity="danger"
      rounded
      outlined
      size="small"
      tooltip="Remove student"
      tooltipOptions={{ position: "top" }}
      onClick={() => deleteStudent(row.id)}
    />
  )

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
        <h4 className="fw-bold mb-0 d-flex align-items-center gap-2">
          <i className="pi pi-users" style={{ color: "var(--brand-primary)" }} />
          All Students
          <span
            className="badge rounded-pill ms-1"
            style={{ background: "var(--stat-gradient)", fontSize: "0.75rem" }}
          >
            {students.length}
          </span>
        </h4>
        <Link
          to="/add"
          className="btn brand-btn-primary btn-sm d-flex align-items-center gap-1 px-3 rounded-pill shadow-sm"
        >
          <i className="pi pi-plus" /> Add Student
        </Link>
      </div>

      {students.length === 0 ? (
        <div className="card brand-card text-center py-5 px-3">
          <i className="pi pi-inbox mb-3" style={{ fontSize: "3.5rem", color: "var(--brand-secondary)", opacity: 0.5 }} />
          <h5 className="fw-semibold mb-1">No students enrolled yet</h5>
          <p className="mb-4" style={{ opacity: 0.6 }}>Start by adding your first student record.</p>
          <div>
            <Link to="/add" className="btn brand-btn-primary px-5 rounded-pill shadow">
              <i className="pi pi-user-plus me-2" /> Add First Student
            </Link>
          </div>
        </div>
      ) : (
        <div className="card brand-card rounded-3 overflow-hidden">
          <DataTable
            value={students}
            paginator
            rows={10}
            stripedRows
            removableSort
            emptyMessage="No students found."
            className="p-datatable-sm"
          >
            <Column field="name"   header="Name"   sortable />
            <Column field="age"    header="Age"    sortable style={{ width: "80px" }} />
            <Column field="email"  header="Email"  sortable />
            <Column field="course" header="Course" body={courseBody} sortable />
            <Column header="Actions" body={actionsBody} style={{ width: "80px" }} />
          </DataTable>
        </div>
      )}

      <div className="mt-3">
        <Link to="/" className="text-decoration-none small" style={{ color: "var(--brand-primary)" }}>
          <i className="pi pi-arrow-left me-1" /> Back to Home
        </Link>
      </div>
    </div>
  )
}

export default StudentList
