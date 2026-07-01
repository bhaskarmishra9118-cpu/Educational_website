import NavBar from "../components/common/NavBar"
import sideBar from "../components/common/SideBar"
import { Outlet } from "react-router-dom"

const MainLayout =() =>{
  return (
    <div>
      <NavBar/>
      <div>
        <sideBar/>
        <Outlet/>
      </div>
    </div>
  )
}