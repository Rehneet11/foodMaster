import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import {z} from "zod";
import { Form, FormDescription, FormField, FormLabel, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";

const formSchema=z.object({
    email:z.string().optional(),
    name:z.string().min(1,"name is required"),
    addressLine1:z.string().min(1,"addressLine1 is required"),
    city:z.string().min(1,"city is required"),
    state:z.string().min(1,"state is required"),
    
    country:z.string().min(1,"country is required"),
});

export type UserFormData = z.infer<typeof formSchema>;

type Props={
    currentUser:User
    onSave:(userProfileData:UserFormData)=> void;
    isLoading:boolean;
    title?:string;
    buttonText?:string;
}

const UserProfileForm=({
    onSave,
    isLoading,
    currentUser,
    title="User Profile" ,
    buttonText="Apply"
}:Props)=>{
    const form =useForm<UserFormData>({
        resolver:zodResolver(formSchema),
        defaultValues:currentUser,
    });

    useEffect(()=>{
        form.reset(currentUser);
    },[currentUser,form])

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSave)} 
            className="space-y-4 bg-slate-200 p-5 rounded-lg md:p-10">
                <div>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <FormDescription>
                        View and Change Profile Information
                    </FormDescription>
                </div>
                <FormField control={form.control} name="email" render={({field})=>(
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} disabled className="bg-slate-400"/>
                        </FormControl>
                    </FormItem>
                )}/>
                <FormField control={form.control} name="name" render={({field})=>(
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field}  className="bg-slate-400"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <div className="flex flex-col md:flex-row gap-4 py-10">
                <FormField control={form.control} name="addressLine1" render={({field})=>(
                    <FormItem className="flex-1">
                        <FormLabel>Address Line 1</FormLabel>
                        <FormControl>
                            <Input {...field}  className="bg-slate-400" />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="city" render={({field})=>(
                    <FormItem className="flex-1">
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-slate-400"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="state" render={({field})=>(
                    <FormItem className="flex-1">
                        <FormLabel>State</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-slate-400"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                
                
                
                <FormField control={form.control} name="country" render={({field})=>(
                    <FormItem className="flex-1">
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-slate-400"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                </div>
                
            {isLoading ? <LoadingButton/> : <Button type="submit" className="bg-green-500">{buttonText}</Button>}
            </form>
        </Form>
    )
};

export default UserProfileForm;
