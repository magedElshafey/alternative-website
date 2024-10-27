import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const RedirectIfLoggedIn = ({ children }) => {
  const { alternativeLogin } = useSelector((state) => state.authSlice);
  if (alternativeLogin) {
    return <Navigate to="/profile/edit-account" />;
  }

  return children;
};

export default RedirectIfLoggedIn;
