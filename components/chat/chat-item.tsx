interface chatItemProps {
  name: String;
  message: String;
}

export const ChatItem = ({ name, message }: chatItemProps) => {
  return (
    <div className="text-left flex items-start justify-start px-4 py-2">
      <p className="text-zinc-600 font-black tracking-tight text-sm capitalize">
        {name} :<span className="font-medium lowercase "> {message}</span>{" "}
      </p>
    </div>
  );
};
