import StudentForm from "../components/StudentForm"
import { Link } from "react-router-dom"

function AddStudent() {
  return (
    <div>
      <Link to="/">← Back to Home</Link>
      <StudentForm />
    </div>
  )
}

export default AddStudent