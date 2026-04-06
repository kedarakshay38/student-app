import { Link } from "react-router-dom"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Button } from "primereact/button"
import { Tag } from "primereact/tag"
import useStudentStore from "../store/useStudentStore"

const courseSeverity = {
  React: "info",
  "Node.js": "success",
  Python: "warning",
  Design: "danger",
}

function StudentList() {
  const students = useStudentStore((state) => state.students)
  const deleteStudent = useStudentStore((state) => state.deleteStudent)

  const courseBody = (row) => (
    <Tag value={row.course} severity={courseSeverity[row.course] ?? "secondary"} />
  )

  const actionsBody = (row) => (
    <Button
      icon="pi pi-trash"
      severity="danger"
      rounded
      outlined
      size="small"
      tooltip="Delete student"
      tooltipOptions={{ position: "top" }}
      onClick={() => deleteStudent(row.id)}
    />
  )

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="fw-bold mb-0 d-flex align-items-center gap-2">
          <i className="pi pi-users text-primary" />
          All Students
          <span className="badge bg-primary ms-1">{students.length}</span>
        </h4>
        <Link to="/add" className="btn btn-primary btn-sm d-flex align-items-center gap-1">
          <i className="pi pi-plus" /> Add Student
        </Link>
      </div>

      {students.length === 0 ? (
        <div className="card border-0 shadow-sm text-center py-5">
          <i className="pi pi-inbox mb-3" style={{ fontSize: "3rem", color: "#c8cfd8" }} />
          <p className="text-muted fs-5 mb-1">No students yet</p>
          <p className="text-muted small mb-3">Start by adding your first student.</p>
          <div>
            <Link to="/add" className="btn btn-primary px-4">
              <i className="pi pi-user-plus me-2" /> Add First Student
            </Link>
          </div>
        </div>
      ) : (
        <div className="card border-0 shadow-sm">
          <DataTable
            value={students}
            paginator
            rows={10}
            stripedRows
            removableSort
            emptyMessage="No students found."
            className="p-datatable-sm"
          >
            <Column field="name" header="Name" sortable />
            <Column field="age" header="Age" sortable style={{ width: "80px" }} />
            <Column field="email" header="Email" sortable />
            <Column field="course" header="Course" body={courseBody} sortable />
            <Column header="Actions" body={actionsBody} style={{ width: "80px" }} />
          </DataTable>
        </div>
      )}

      <div className="mt-3">
        <Link to="/" className="text-decoration-none text-muted small">
          <i className="pi pi-arrow-left me-1" /> Back to Home
        </Link>
      </div>
    </div>
  )
}

export default StudentList
