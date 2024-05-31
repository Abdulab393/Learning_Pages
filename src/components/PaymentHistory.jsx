import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { User } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const invoices = [
  {
    serial: 1,
    CustomerName:"Mark Henry",
    CustomerFatherName:"John Henry",
    date:"22-05-2024",
    transactionNo:2343,
    paymentStatus: "Success",
    totalAmount: "₹ 1250.00",
    paymentMethod: "Credit Card",
  },
  {
    serial: 2,
    CustomerName:"Amit Pandey",
    CustomerFatherName:"John Pandey",
    date:"22-05-2024",
    transactionNo:2543,
    paymentStatus: "Pending",
    totalAmount: "₹ 1250.00",
    paymentMethod: "PayPal",
  },
  {
    serial: 3,
    CustomerName:"Vipul Kumar",
    CustomerFatherName:"Vishnu Kumar",
    date:"22-05-2024",
    transactionNo:2363,
    paymentStatus: "Failes",
    totalAmount: "₹ 1250.00",
    paymentMethod: "Bank Transfer",
  },
  {
    serial: 4,
    CustomerName:"John Henry",
    CustomerFatherName:"Mark Henry",
    date:"22-05-2024",
    transactionNo:1343,
    paymentStatus: "Success",
    totalAmount: "₹ 1250.00",
    paymentMethod: "Credit Card",
  },
  {
    serial: 5,
    CustomerName:"Jhonty Rhodes",
    CustomerFatherName:"Monty Rhodes",
    date:"22-05-2024",
    transactionNo:2352,
    paymentStatus: "Success",
    totalAmount: "₹ 1250.00",
    paymentMethod: "PayPal",
  },
  {
    serial: 6,
    CustomerName:"Abc Diaz",
    CustomerFatherName:"Def Diaz",
    date:"22-05-2024",
    transactionNo:2343,
    paymentStatus: "Pending",
    totalAmount: "₹ 1250.00",
    paymentMethod: "Bank Transfer",
  },
]

export function PaymentHistory() {
  const navigate=useNavigate();
function Navigation(){
    navigate('/profile')
}

  return (<>
    <div>

      {/* grid undestand */}
      {/* <div className="grid grid-cols-2 md:grid-cols-12 w-full bg-green-500 h-10">
        <div>hello</div>
        <div>good</div>
        <div>good</div>
        <div>good</div>
        <div>good</div>
        <div>good</div>
        <div className="col-span-2 bg-red-100">good</div>

      </div> */}


      <div className=" bg-red-300 p-4 rounded-lg text-center">
        <h3 className="inline">Payment History</h3>
        <User className="inline float-right" />

      </div>


      <Table>
        <TableCaption>A list of your recent payment.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.No.</TableHead>
            <TableHead>Student Name</TableHead>
            <TableHead>Father's Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((item) => (
            <TableRow key={item?.serial}>
              <TableCell className="font-medium">{item?.serial}</TableCell>
              <TableCell>{item?.CustomerName}</TableCell>
              <TableCell>{item?.CustomerFatherName}</TableCell>
              <TableCell>{item?.date}</TableCell>

              <TableCell>{item?.paymentStatus}</TableCell>
              <TableCell>{item?.paymentMethod}</TableCell>
              <TableCell className="text-right">{item?.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="">
          <TableRow>
            <TableCell colSpan={6}>Total</TableCell>
            <div className="flex justify-between inline float-right p-1">
            <h2 className="flex justify-between inline float-right p-1">₹ 7,800.00</h2>
            </div>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="flex justify-between inline float-right p-1">
            <Button onClick={Navigation} >View</Button>
            </div>
      
    </div>
  </>
  )
}
