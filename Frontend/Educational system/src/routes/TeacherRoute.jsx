import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TeacherRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user || user.role !== "teacher") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default TeacherRoute;
