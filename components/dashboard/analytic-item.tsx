import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";

interface analyticItemProps {
  title: String;
  value: String;
  prev: String;
  profit: Boolean;
  percent: String;
}

export const AnalyticItem = ({
  title,
  value,
  prev,
  profit,
  percent,
}: analyticItemProps) => {
  return (
    <div className="border-2 px-4 py-2 flex-1 mx-1 ">
      <p className="text-indigo-500 font-bold text-md">{title}</p>
      <p className="text-[#262626] font-bold text-xl ">
        {value}
        {profit ? (
          <TrendingUp className="inline-block text-green-500 w-8 h-6" />
        ) : (
          <TrendingDown className="inline-block text-red-500 w-8 h-6" />
        )}
      </p>
      <p className="text-[#737373] font-semibold text-sm ">
        vs Prev {prev}{" "}
        <span className={profit ? "text-green-500" : "text-red-500"}>
           ({percent})
        </span>
      </p>
    </div>
  );
};
