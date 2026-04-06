import { useState } from "react"
import { InputText } from "primereact/inputtext"
import { Dropdown } from "primereact/dropdown"
import { Button } from "primereact/button"
import useStudentStore from "../store/useStudentStore"
import { useNavigate } from "react-router-dom"

const courseOptions = [
  { label: "React", value: "React" },
  { label: "Node.js", value: "Node.js" },
  { label: "Python", value: "Python" },
  { label: "Design", value: "Design" },
]

function StudentForm() {
  const navigate = useNavigate()
  const addStudent = useStudentStore((state) => state.addStudent)

  const [formData, setFormData] = useState({ name: "", age: "", email: "", course: "" })
  const [errors, setErrors] = useState({})

  function handleChange(field, value) {
    setFormData({ ...formData, [field]: value })
    if (errors[field]) setErrors({ ...errors, [field]: null })
  }

  function validate() {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.age.toString().trim()) newErrors.age = "Age is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.course) newErrors.course = "Please select a course"
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const foundErrors = validate()
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors)
      return
    }
    addStudent(formData)
    navigate("/students")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-4">

        <div className="col-md-6">
          <label className="form-label fw-semibold">
            <i className="pi pi-user me-1 text-primary" /> Full Name
          </label>
          <InputText
            name="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="e.g. Jane Doe"
            className={`w-100 ${errors.name ? "p-invalid" : ""}`}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">
            <i className="pi pi-hashtag me-1 text-primary" /> Age
          </label>
          <InputText
            name="age"
            type="number"
            value={formData.age}
            onChange={(e) => handleChange("age", e.target.value)}
            placeholder="e.g. 21"
            className={`w-100 ${errors.age ? "p-invalid" : ""}`}
          />
          {errors.age && <small className="text-danger">{errors.age}</small>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">
            <i className="pi pi-envelope me-1 text-primary" /> Email
          </label>
          <InputText
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="e.g. jane@example.com"
            className={`w-100 ${errors.email ? "p-invalid" : ""}`}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">
            <i className="pi pi-book me-1 text-primary" /> Course
          </label>
          <Dropdown
            value={formData.course}
            options={courseOptions}
            onChange={(e) => handleChange("course", e.value)}
            placeholder="Select a course"
            className={`w-100 ${errors.course ? "p-invalid" : ""}`}
          />
          {errors.course && <small className="text-danger">{errors.course}</small>}
        </div>

        <div className="col-12 d-flex gap-2 pt-2">
          <Button
            type="submit"
            label="Add Student"
            icon="pi pi-check"
            className="px-4"
          />
          <Button
            type="button"
            label="Cancel"
            icon="pi pi-times"
            severity="secondary"
            outlined
            onClick={() => navigate("/")}
          />
        </div>

      </div>
    </form>
  )
}

export default StudentForm
