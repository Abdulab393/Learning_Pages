import * as React from "react"
import  img1 from '../images/profile.jpg';

import { Button } from "@/components/ui/button"
import { LogOut, GlobeLock ,ReceiptText,Store,UserCog,Languages,ContactRound } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ProfilePage() {
  return (<>
  <div className="container mx-auto">
  <div className="bg-blue-300 p-4 h-40 rounded flex-initial md:flex-2 ">
    <img className="h-20 w-30" src={img1} alt="Image"></img>
    <h2 className="inline text-teal-700 underline" >User Name </h2>
    <p>Payment Pending</p>
    
    </div>
  
  <div className="p-2 rounded md:block grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    <Card className="w-auto ">
      <CardHeader>
        <CardTitle>Setting Options</CardTitle>
      </CardHeader>
      <CardContent>
     
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <GlobeLock />
              Privacy Policy
            </div>
            <div className="flex flex-col space-y-1.5">
            <ReceiptText /> Terms & Conditions
            </div>
            <div className="flex flex-col space-y-1.5">
            <Store />  About Us
            </div>
            <div className="flex flex-col space-y-1.5">
            <UserCog /> Change Password
            </div>
            <div className="flex flex-col space-y-1.5">
            <Languages /> Switch Language
            </div>
            <div className="flex flex-col space-y-1.5">
            <ContactRound /> Contact Us
            </div>
          </div>
     
      </CardContent>
      <CardFooter className="flex justify-between inline float-right p-1">
        <Button> LogOut</Button>
      </CardFooter>
    </Card>
    </div>
    </div>
    </>
  )
}
