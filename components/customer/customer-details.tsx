export const CustomerDetails = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <div className="border-2 w-[40%] h-[150px] p-2 m-1 flex flex-col justify-between item-center">
          <p className="text-md font-bold tracking-tight text-indigo-500 ">
            Customer Details
          </p>
          <div className="text-[#737373] font-medium text-sm  ">
            <div className="flex  ">
              <p className="w-[50%]">Name:</p>
              <p className="w-[50%]">Rakesh Sinha</p>
            </div>
            <div className="flex ">
              <p className="w-[50%]">Phone:</p>
              <p className="w-[50%]">789654123</p>
            </div>
            <div className="flex ">
              <p className="w-[50%]">Insurance Type:</p>
              <p className="w-[50%]">Motor</p>
            </div>
            <div className="flex ">
              <p className="w-[50%]">Expiry:</p>
              <p className="w-[50%]">Within 30 Days</p>
            </div>
          </div>
        </div>
        <div className="border-2 w-[60%] h-[150px] p-2 m-1 flex flex-col justify-between item-center">
            <div>

          <p className="text-md font-bold tracking-tight text-indigo-500 ">
            {" "}
            Call Summary
          </p>
          <p className="text-md font-bold tracking-tight text-[#737373] ">15/10/2023</p>
            </div>
          <p className="text-sm ">
            Customer is keen to renew his policy at the earliest and is looking
            for Acko Insurance which is not currently supported by us. Hence it
            has been escalated to agent Ramesh Kumar
          </p>
        </div>
      </div>
      <div>
        <p className="text-md font-bold tracking-tight text-indigo-500 p-2 border-2 mx-1">Customer Intent: High</p>
      </div>
      <div>
      <div className="border-2 w-full  p-2 m-1 flex flex-col justify-between item-center">
          <p className="text-md font-bold tracking-tight text-indigo-500 ">
            Customer Details
          </p>
          <div className="text-[#737373] font-medium text-sm  ">
            <div className="flex  ">
              <p className="w-[30%]">customer Need:</p>
              <p >Acko Insurance</p>
            </div>
            <div className="flex ">
              <p className="w-[30%]">Solution Offered:</p>
              <p >Alternative plans suggested, but customer not interested.</p>
            </div>
            <div className="flex ">
              <p className="w-[30%]">Recommendation:</p>
              <p >Escalated to agent support to check if we can offer Acko.</p>
            </div>
            <div className="flex ">
              <p className="w-[30%]">Next Steps:</p>
              <p >Call customer within 5 days with details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
