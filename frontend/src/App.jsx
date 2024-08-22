import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import HomePage from "./Components/HomePage"
import Login from "./Components/Login"
import Signup from './Components/Signup'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/register",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>,
  }
])
function App() {

  return (
    <>
      <div className="flex items-center justify-center" >
        <RouterProvider router={router}/>

      </div>
    </>
  )
}

export default App
