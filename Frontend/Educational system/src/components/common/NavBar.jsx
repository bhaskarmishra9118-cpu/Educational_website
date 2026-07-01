import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

const NavBar = (data)=>{
   const {user}= useSelector(
        (state)=>{
            state.auth
        }
    )
    return (
        
            <header>
                <div>
                    Edusolve
                </div>
                <span> {user?.name} </span>
                <img src= {user?.profileImage} alt="My profile photo"/>

            </header>
        
    )
     
}