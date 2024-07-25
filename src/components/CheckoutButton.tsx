import { useAuth0 } from "@auth0/auth0-react"
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import LoadingButton from "./LoadingButton";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";

type Props={
    onCheckout: (userFormData: UserFormData) => void;
    disabled: boolean;
    isLoading:boolean;
}

const CheckoutButton=({onCheckout,disabled,isLoading}:Props)=>{
    const{isAuthenticated,
        isLoading:isAuthLoading,
        loginWithRedirect
    }=useAuth0();
    const { pathname }=useLocation();

    const {currentUser,isLoading:isGetUserLoading}=useGetMyUser();

const onLogin=async()=>{
    await loginWithRedirect({
        appState:{
            returnTo:pathname,
        }
    })
}

    if(!isAuthenticated){
        return( 
        <Button 
            className="bg-green-500 flex-1"
            onClick={onLogin}>
            Log in to Check out
        </Button>
        )
    }
    if(isAuthLoading || !currentUser || isLoading){
       return <LoadingButton/> 
    }

    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button disabled={disabled} className="bg-green-500 rounded-lg flex-1">
                    Checkout
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[425px] md:min-w-[700px] bg-slate-300">
                <UserProfileForm 
                    currentUser={currentUser} 
                    onSave={onCheckout} 
                    isLoading={isGetUserLoading}
                    title="Confirm Delivery Details"
                    buttonText="Continue to payment"
                />
            </DialogContent>
        </Dialog>
    )
}
export default CheckoutButton