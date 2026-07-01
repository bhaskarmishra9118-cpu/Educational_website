import { useSelector } from "react-redux";
import {Navigate } from "react-router-dom"
import { menus } from "./MenuConfig";

const SideBar = ()=>{
  const {user}= useSelector(
    (state)=>{
      state.auth
    }
  )
  const role = user?.role;
  const menus = menus[role] || [];
  return (
    <aside>
      <div>
        <h1>
          user?.name
        </h1>
        <img src={user?.profileImage} alt="My profile photo"/>
      </div>
      <ul>
        {menus.map((menu, index)=>(
          <li key={index}>
            <a href={menu.path}>{menu.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
