import React from "react"
import {Route} from "react-router-dom"
import Menu from "./common/Menu"
import {AsyncLoad, lazyLoad} from "./AsyncLoad"

const HomePage = AsyncLoad(lazyLoad("./home/HomePage"))
const CoursesPage = AsyncLoad(lazyLoad("./courses/CoursesPage"))
const AboutPage = AsyncLoad(lazyLoad("./about/AboutPage"))

const App = props => {
  return (
    <div className="container">
      <Menu />
      <Route exact path="/" component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/about" component={AboutPage} />
    </div>
  )
}
export default App
