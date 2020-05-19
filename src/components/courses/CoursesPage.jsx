import React, {useState} from "react"

const initForm = {
  title: "",
}

const CoursesPage = () => {
  const [form, setForm] = useState(initForm)

  const handleChange = e => {
    const {name, value} = e.target
    setForm(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    
  }

  return (
    <div className="container mt-5">
      <h1>Courses Page</h1>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                onChange={handleChange}
                value={form.title}
                name="title" id="title" className="form-control" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Add Course</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CoursesPage
