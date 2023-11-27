import { CustomerTable } from "@/components/customer/customer-table";
import { CustomerDetails } from "./customer-details";



export const CustomerSheet = () => {
    return(
        <div className="border-2 border-indigo-200 w-[45%] h-[calc(100vh-95px)] mx-1  ">
            <CustomerTable/>
            <CustomerDetails/>
        </div>
    );
}