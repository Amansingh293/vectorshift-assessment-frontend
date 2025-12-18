import React, { useState } from "react";
import BaseNode from "./BaseNode";
import CustomButton from "../components/CustomButton";

const CounterNode = ({ id, data }) => {
  const [count, setCount] = useState(0);

  return (
    <BaseNode id={id} data={data}>
      <div className="flex flex-col items-center gap-2 text-sm min-w-44">
        <div className="rounded border px-3 py-1 font-mono">{count}</div>

        <div className="flex gap-2">
          <CustomButton
            bgColor="#16a34a"
            hoverBgColor="#15803d"
            onClick={() => setCount((c) => c + 1)}
          >
            +
          </CustomButton>

          <CustomButton
            bgColor="#dc2626"
            hoverBgColor="#b91c1c"
            onClick={() => setCount((c) => c - 1)}
          >
            -
          </CustomButton>
        </div>
      </div>
    </BaseNode>
  );
};

export default CounterNode;
