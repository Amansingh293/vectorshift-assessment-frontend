import React, { useState } from "react";
import BaseNode from "./BaseNode";
import CustomButton from "../components/CustomButton";

const RandomNumberNode = ({ id, data }) => {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    setNumber(Math.floor(Math.random() * 100));
  };

  return (
    <BaseNode id={id} data={data}>
      <div className="flex flex-col items-center gap-2 text-sm mt-4 min-w-44">
        <div className="rounded border px-3 py-1 min-w-[40px] text-center">
          {number !== null ? number : "--"}
        </div>

        <CustomButton
          hoverBgColor={"#7e22ce"}
          onClick={generateNumber}
          className="rounded bg-purple-500 px-3 py-1 text-white hover:bg-purple-700"
        >
          Generate
        </CustomButton>
      </div>
    </BaseNode>
  );
};

export default RandomNumberNode;
