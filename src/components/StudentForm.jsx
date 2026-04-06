import { useState } from "react";
import useStudentStore from "../store/useStudentStore"
import { useNavigate } from "react-router-dom"
function StudentForm() {
    const navigate = useNavigate()

    const addStudent = useStudentStore((state) => state.addStudent)

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  function validate() {
    const newErrors={}

if(formData.name.trim()===""){
      newErrors.name="Name is required"
    }
    if(formData.age.trim()===""){
      newErrors.age="Age is required"
    }
    if(formData.email.trim()===""){
      newErrors.email="Email is required"
    }
    if(formData.course){
       newErrors.course = "Please select a course"
    }
    
    return newErrors;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>

      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>Course:</label>
        <select name="course" value={formData.course} onChange={handleChange}>
          <option value="">Select a course</option>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="python">python</option>
          <option value="design">design</option>
        </select>
        {errors.course && <p style={{ color: "red" }}>{errors.course}</p>}
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
