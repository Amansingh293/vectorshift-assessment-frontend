// ToggleNode.jsx
import React, { useState } from "react";
import BaseNode from "./BaseNode";
import CustomButton from "../components/CustomButton";

const ToggleNode = ({ id, data }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <BaseNode id={id} data={data}>
      <div className="flex flex-col items-center gap-2 text-sm min-w-44">
        <div
          className={`rounded px-3 py-1 font-medium ${
            isOn ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-800"
          }`}
        >
          {isOn ? "ON" : "OFF"}
        </div>

        <CustomButton
          onClick={() => setIsOn((prev) => !prev)}
          className="rounded bg-purple-500 px-3 py-1 text-white hover:bg-purple-700"
          hoverBgColor={"#7e22ce"}
        >
          Toggle
        </CustomButton>
      </div>
    </BaseNode>
  );
};

export default ToggleNode;
