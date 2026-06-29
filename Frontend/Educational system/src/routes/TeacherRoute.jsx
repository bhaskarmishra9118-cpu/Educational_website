import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Children } from "react";

const TeacherProtected=(Children)=>{
    const {user}= useSelector(
        (state)=> state.auth
    )
    if(!user || !user.role==="teacher")
        return <Navigate to= "/" replace/>

    return
    Children
}
export default TeacherProtected