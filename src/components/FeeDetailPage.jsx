import React from 'react'
import { Bell, Home, CircleUserRound, Settings } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "@/components/ui/button"
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
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { ArrowUpRight } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

function FeeDeatilPage() {
    return (
        <div className="text-center sm:text-left">
            <Tabs defaultValue="account" className="w-auto ">
                <TabsList className="grid grid-cols-3 px-10 gap-4 mt-10">
                    <TabsTrigger value="account">Basic Details</TabsTrigger>
                    <TabsTrigger value="password">Course Details</TabsTrigger>
                    <TabsTrigger value="details">Fee Details</TabsTrigger>

                </TabsList>
                <TabsContent value="account">
                    <Card className="xl:col-span-2 text-center sm:text-left">

                        <CardContent className="space-y-2 text-center sm:text-left">
                            <div className="grid gap-3">
                                <div className="font-semibold">Basic Details</div>
                                <dl className="grid grid-cols-1  md:grid-cols-4 gap-10">

                                    <div className="flex items-center justify-between ">
                                        <dt className="flex-initial text-muted-foreground">Name : &nbsp;</dt>
                                        <dd className='flex-1'>Liam Johnson</dd>
                                    </div>

                                    <div className="flex items-center justify-between ">
                                        <dt className="flex-initial text-muted-foreground">Father's Name : &nbsp;</dt>
                                        <dd className='flex-1'>Henry Johnson</dd>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <dt className="flex-initial text-muted-foreground">Gender : &nbsp;</dt>
                                        <dd className='flex-1'>Male</dd>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <dt className="flex-initial text-muted-foreground">DOB : &nbsp;</dt>
                                        <dd className='flex-1'>11/05/1999</dd>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <dt className="flex-initial text-muted-foreground">City : &nbsp;</dt>
                                        <dd className='flex-1'> Ranchi</dd>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <dt className="flex-initial text-muted-foreground">State : &nbsp;</dt>
                                        <dd className='flex-1'>Jharkhand</dd>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <dt className="flex-initial text-muted-foreground">Pincode : &nbsp;</dt>
                                        <dd className='flex-1'>834001</dd>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <dt className="flex-initial text-muted-foreground">Email : &nbsp;</dt>
                                        <dd className='flex-1'>
                                            <a href="mailto:">liam@acme.com</a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <dt className="flex-initial text-muted-foreground">Phone : &nbsp;</dt>
                                        <dd className='flex-1'>
                                            <a href="tel:">+1 234 567 890</a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card className="xl:col-span-2 text-center sm:text-left">
                        <CardHeader>
                            <CardTitle>Course Details</CardTitle>
                            <CardDescription>
                                Course details shown below.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex items-center justify-between">
                                <dt className=" flex initial text-muted-foreground">Class : &nbsp;</dt>
                                <dd className='flex-1'>
                                    <a href="tel:">VII</a>
                                </dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className=" flex initial text-muted-foreground">section : &nbsp;</dt>
                                <dd className='flex-1'>
                                    <a href="tel:">A</a>
                                </dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="flex initial text-muted-foreground">Roll No. : &nbsp;</dt>
                                <dd className='flex-1'>
                                    <a href="tel:">26</a>
                                </dd>
                            </div>
                        </CardContent>
                        <CardFooter>

                        </CardFooter>
                    </Card>
                </TabsContent>





                <TabsContent value='details'>
                    <Card
                        className="xl:col-span-2 text-center sm:text-left" x-chunk="dashboard-01-chunk-4"
                    >
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-2">
                                <CardTitle>Fee Details</CardTitle>
                                <CardDescription>
                                    Cousrse Type
                                </CardDescription>
                            </div>

                            <Button size="sm" className="ml-auto gap-1"> Total Amount </Button>
                        </CardHeader>
                        <CardContent value='details'>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Student</TableHead>
                                        <TableHead className="hidden xl:table-column">
                                            Type
                                        </TableHead>
                                        <TableHead className="hidden xl:table-column">
                                            Status
                                        </TableHead>
                                        <TableHead className="hidden xl:table-column">
                                            Date
                                        </TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">Liam Johnson</div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                id : liam@example.com
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            Sale
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            <Badge className="text-xs" variant="outline">
                                                Approved
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                            2023-06-23
                                        </TableCell>
                                        <TableCell className="text-right">Rs. 250.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">Olivia Smith</div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                id : olivia@example.com
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            Refund
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            <Badge className="text-xs" variant="outline">
                                                Declined
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                            2023-06-24
                                        </TableCell>
                                        <TableCell className="text-right">Rs. 150.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">Noah Williams</div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                id : noah@example.com
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            Subscription
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            <Badge className="text-xs" variant="outline">
                                                Approved
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                            2023-06-25
                                        </TableCell>
                                        <TableCell className="text-right">Rs. 350.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">Emma Brown</div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                id : emma@example.com
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            Sale
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            <Badge className="text-xs" variant="outline">
                                                Approved
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                            2023-06-26
                                        </TableCell>
                                        <TableCell className="text-right">Rs. 450.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">Liam Johnson</div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                id : liam@example.com
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            Sale
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                            <Badge className="text-xs" variant="outline">
                                                Approved
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                            2023-06-27
                                        </TableCell>
                                        <TableCell className="text-right">Rs. 550.00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>

                    </Card>
                </TabsContent>
            </Tabs>


        </div>
    )
}

export default FeeDeatilPage
