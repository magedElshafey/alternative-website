import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  const { alternativeLogin } = useSelector((state) => state.authSlice);
  if (!alternativeLogin) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default ProtectedRoutes;
