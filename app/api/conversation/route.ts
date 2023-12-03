import { NextResponse } from "next/server";
import fs from "fs";

export async function POST(req: Request, res: Response) {
  try {
    const { uId, user, message } = await req.json();
    const filePath = "./data/conversation.json";
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return new NextResponse("Error reading file:");
      }

      // Parse the JSON data into a JavaScript object
      const jsonData = JSON.parse(data);
    //   console.log(jsonData);
      // Now you can work with the jsonData object

      const newEmployee = {
        uId: uId,
        user: user,
        message: message,
      };

      jsonData.push(newEmployee);
      const updatedData = JSON.stringify(jsonData, null, 2);

      // Write the updated JSON data back to the file
      fs.writeFile(filePath, updatedData, (writeErr) => {
        if (writeErr) {
          console.error("Error writing to file:", writeErr);
        } else {
          return NextResponse.json(updatedData);
        }
      });
    });
  } catch (error) {
    console.log("CONVERSATION_POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    // const { uId, user, message } = await req.json();
    const filePath = "./data/conversation.json";
    console.log(filePath);
    fs.readFile(filePath, "utf-8", async (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          return new NextResponse("Error reading file:");

        }

        
          // Parse the JSON data into a JavaScript object
        //   const jsonData = await JSON.parse(data);
        console.log(data);
          return NextResponse.json(data);

         
       
      });
  } catch (error) {
    console.log("CONVERSATION_GET", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
