import "./Messages.css";
type MessageProps = {
  message: string;
};

export function Message(props: MessageProps) {
  return <span className="message">{props.message}</span>;
}
