import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { chartData } from "@/types";
import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";


interface dashboardChartProps{
    title:String;
    data:Array<chartData>;
    
    menuTtile:String;
    menuItems:Array<String>;
    menuTrigger:String;
    labels:Array<string>;
    type:String;

}


export const DashboardChart = ({
    title,
    data,
    menuTtile,
    menuItems,
    menuTrigger,
    labels,
    type
}:dashboardChartProps
) => {

   
        let lineData :any = {
          
          labels: labels,
          datasets: [
                //   data?.map((item,index)=>(
                //       {
                //           label: item.label,
                //           data: item.data,
                //           backgroundColor: item.backgroundColor,
                //           borderColor: item.borderColor,
                //           borderWidth: item.borderWidth,
                //           fill: item.fill,
                //       }
                //   ))
              data[0]
           
          ],
        };
   
        let lineData2 :any = {
          
          labels: labels,
          datasets: [
            
              data[0],
              data[1]
           
          ],
        };

        let barData :any = {
          
          labels: labels,
          datasets: [
            
              data[0],
              data[1]
              
              
           
          ],
        };

        let pieData :any = {
          
          labels: labels,
          datasets: [
            
              data[0]
            
              
              
           
          ],
        };




    
  const canvasEl = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    // const canvas =  document.getElementById('myChart') as HTMLCanvasElement;
    // const ctx = canvas?.getContext('2d');
    const canvas = canvasEl?.current;
    if (canvas == null) return; // current may be null

    const ctx = canvas.getContext("2d");
    if (ctx == null) return;
    if (ctx && type==='line') {
      var myLineChart = new Chart(ctx, {
        type: "line",
        data: lineData ,
      });
    }
    if (ctx && type==='line2') {
      var myLineChart = new Chart(ctx, {
        type: "line",
        data: lineData2 ,
      });
    }
    if (ctx && type === 'bar') {
      var myBarChart  = new Chart(ctx, {
        type: "bar",
        data: barData ,
     
      });
    }
    if (ctx && type === 'pie') {
      var myPieChart  = new Chart(ctx, {
        type: "pie",
        data: pieData ,
     
      });
    }
    return function cleanup() {
      myLineChart?.destroy();
      myBarChart?.destroy();
      myPieChart?.destroy();
    };
  });

  return (
    <div className="  border-2  m-1">
      <div className="flex justify-between items-center px-4 py-1">
        <h1 className="text-md font-bold tracking-tight text-indigo-500  ">
          {title}{" "}
        </h1>
        <div className="flex justify-center items-center">
          <span className="px-2 font-medium text-[#737373] ">{menuTtile}</span>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="border-2  rounded-[3px] text-base  text-[#737373] font-medium ">
                  {menuTrigger}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col min-w-[110px] p-2 ">
                    {
                        menuItems?.map((item,index)=>(
                            <NavigationMenuLink key={index}>{item}</NavigationMenuLink>
                        ))
                    }
              
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div>
        <canvas className="max-h-[200px] px-4 " id="myChart" ref={canvasEl}></canvas>
      </div>
    </div>
  );
};
