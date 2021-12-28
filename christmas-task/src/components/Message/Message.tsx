import React, { FC } from "react";
import "./Messages.css";
type MessageProps = {
  message: string;
};

export const Message: FC<MessageProps> = (props) => (
  <span className="message">{props.message}</span>
);
