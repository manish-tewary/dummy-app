import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import customerData from "@/data/customer.json";

export const CustomerTable = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <h1 className="text-md font-bold tracking-tight text-indigo-500  ">
          Customer{" "}
        </h1>
        <div className="flex justify-center items-center">
          <span className="px-2 font-bold text-[#737373] ">Status</span>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="border-2  rounded-[3px] text-base">
                  Excalated
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col min-w-[110px] p-2 ">
                  <NavigationMenuLink>Active</NavigationMenuLink>
                  <NavigationMenuLink>Resolved</NavigationMenuLink>
                  <NavigationMenuLink>Problem</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div>
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead className=" font-bold text-indigo-500 text-base ">Name</TableHead>
      <TableHead className=" font-bold text-indigo-500 text-base ">Date Contacted</TableHead>
      <TableHead className=" font-bold text-indigo-500 text-base ">Reason</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
        customerData?.map((item, index) => (
            <TableRow className="h-[10px]" key={index}>
                <TableCell className="font-xs ">{item.name}</TableCell>
                <TableCell className="font-xs ">{item.date}</TableCell>
                <TableCell className="font-xs ">{item.reason}</TableCell>
            </TableRow>
        ))
    }
  
  </TableBody>
</Table>

      </div>
    </div>
  );
};
