import React, { useState } from "react";
import BaseNode from "./BaseNode";
import CustomButton from "../components/CustomButton";

const messages = [
  "Pipeline initialized successfully",
  "Waiting for upstream input…",
  "Execution completed 🎉",
  "Random insight generated",
  "Node processed data",
  "No errors detected",
  "Flow running smoothly 🚀",
];

const RandomMessageNode = ({ id, data }) => {
  const [message, setMessage] = useState(
    messages[Math.floor(Math.random() * messages.length)]
  );

  const generateRandomMessage = () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMsg);
  };

  return (
    <BaseNode id={id} data={data}>
      <div className="flex flex-col gap-2 text-sm min-w-56">
        <p className="rounded bg-gray-100 p-2 text-gray-700">{message}</p>

        <CustomButton
          className="h-[30px]"
          bgColor="#a855f7"
          hoverBgColor="#9333ea"
          size="small"
          style={{ fontSize: "14px", padding: "8px" }}
          onClick={generateRandomMessage}
        >
          Generate message
        </CustomButton>
      </div>
    </BaseNode>
  );
};

export default RandomMessageNode;
