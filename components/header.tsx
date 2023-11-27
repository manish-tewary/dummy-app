"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export const Header = () => {
  const router = useRouter();
  const handleDash = (e: any) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  const handleCustomer = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="flex items-center justify-between p-4 h-[80px]">
      <div>
        <div className="text-2xl font-bold text-indigo-300">
          TRINI AI | <span className="text-black">InsureRight</span>
        </div>
      </div>

      <nav>
        <Button onClick={handleDash} variant="primary">
          DashBoard
        </Button>
        <Button onClick={handleCustomer} variant="primary">Customer Stats</Button>
        <Button variant="primary">Knowledge Hub</Button>
      </nav>
    </div>
  );
};
