"use client"

import { ChatHistory } from "@/components/chat/chat-history";
import { CustomerSheet } from "@/components/customer/customer-sheet";


const HomePage=()=>{
    return(
        <div className="flex items-center justify-center">
          <CustomerSheet/>
          <ChatHistory/>
        </div>
    )
}

export default HomePage;