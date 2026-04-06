import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h2>Welcome to Student Management App</h2>
      <p>Manage your students easily.</p>
      <Link to="/add">Add a New Student</Link>
      <br />
      <Link to="/students">View All Students</Link>
    </div>
  )
}

export default Home