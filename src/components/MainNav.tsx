import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./usernameMenu";
import { Link } from "react-router-dom";

const MainNav=()=>{
    const {loginWithRedirect,isAuthenticated}=useAuth0();
    return(
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? (
            <>
            <Link to ="/order-status" className="font-bold hover:text-green-500 ">
                 My Orders
            </Link>
            <UsernameMenu/>
            </>):(
            <Button  
            onClick={async()=> await loginWithRedirect()}
            variant="ghost" 
            className="font-bold hover:text-green-500 hover:bg-black"
            >
                Login
            </Button>
            )}
        </span>
        
    )
}
export default MainNav;