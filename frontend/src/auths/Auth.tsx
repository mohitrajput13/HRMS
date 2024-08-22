
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface AuthProps {
    children?:any
}
const Auth = ({children}:AuthProps)=>{
    const {isLoggedIn} = useSelector((store:any)=>store.user);
    return isLoggedIn ? children : <Navigate to="/"/>;
}

export default Auth;