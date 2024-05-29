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

const invoices = [
  {
    serial: 1,
    paymentStatus: "Success",
    totalAmount: "₹ 1250.00",
    paymentMethod: "Credit Card",
  },
  {
    serial: 2,
    paymentStatus: "Pending",
    totalAmount: "₹ 1250.00",
    paymentMethod: "PayPal",
  },
  {
    serial: 3,
    paymentStatus: "Failes",
    totalAmount: "₹ 1250.00",
    paymentMethod: "Bank Transfer",
  },
  {
    serial: 4,
    paymentStatus: "Success",
    totalAmount: "₹ 1250.00",
    paymentMethod: "Credit Card",
  },
  {
    serial: 5,
    paymentStatus: "Success",
    totalAmount: "₹ 1250.00",
    paymentMethod: "PayPal",
  },
  {
    serial: 6,
    paymentStatus: "Pending",
    totalAmount: "₹ 1250.00",
    paymentMethod: "Bank Transfer",
  },
]

export function PaymentHistory() {
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


      <div className=" bg-red-300 p-4 rounded-lg">
        <h3 className="inline">Payment History</h3>
        <User className="inline float-right" />

      </div>


      <Table>
        <TableCaption>A list of your recent payment.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.No.</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((item) => (
            <TableRow key={item?.serial}>
              <TableCell className="font-medium">{item?.serial}</TableCell>
              <TableCell>{item?.paymentStatus}</TableCell>
              <TableCell>{item?.paymentMethod}</TableCell>
              <TableCell className="text-right">{item?.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">₹ 7,800.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  </>
  )
}
