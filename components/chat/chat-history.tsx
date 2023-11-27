import { ChatItem } from "./chat-item";

import chatData from "@/data/chat.json";

export const ChatHistory = () => {
  return (
    <div className="border-2 border-indigo-200 w-[55%] h-[calc(100vh-95px)] mx-1  ">
      <h3 className="text-indigo-500/70 font-bold tracking-tight text-[1.2rem] px-4 py-2 h-[40px]">
        Chat History
      </h3>

      <div className="overflow-y-auto  h-[calc(100%-40px)]">
        {chatData?.map((item, index) => (
          <ChatItem
            key={index}
            name={item.name}
            message={item.message}
          ></ChatItem>
        ))}
      </div>
    </div>
  );
};
