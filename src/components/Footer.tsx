import logomain from "../assets/logomain.jpg"
import { Link } from "react-router-dom";
const Footer=()=>{
    
    return(
        <div className="bg-green-400 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span>
            <div className="flex items-center gap-3">
                <img src={logomain} alt="logo" className="h-12 rounded-lg" /> 
                <span className="text-3xl text-white font-bold tracking-tight">
                    FoodMaster
                </span>
            </div> 
            </span>
            <span className=" text-white font-bold tracking-tight flex gap-4" >
            <Link to="/coming-soon">
                <span>Privacy Policy </span>
                
            </Link>
            <Link to="/coming-soon">
                <span>Terms and Conditions </span>
                
            </Link>
                
            </span>
        </div>
    </div>
    )
}
    

export default Footer;