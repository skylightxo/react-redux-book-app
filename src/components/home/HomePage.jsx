import React from "react"
import {Link} from "react-router-dom"

const HomePage = () => {
  return (
    <div className="jumbotron container mt-5">
      <h1>Courses administration</h1>
      <p>Learn Redux</p>
      <Link to="/about" className="btn btn-primary btn-lg">
        About page
      </Link>
    </div>
  )
}

export default HomePage
