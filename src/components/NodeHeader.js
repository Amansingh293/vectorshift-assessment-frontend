import React from "react";
import { useStore } from "../store";
import { RxCrossCircled } from "react-icons/rx";
import { NODE_TYPE_LABEL_MAP } from "../util.js";

const NodeHeader = ({ data, type, id }) => {
  const deleteNode = useStore((state) => state.deleteNode);

  return (
    <div className="h-5 bg-purple-200 rounded-lg flex w-full justify-between px-2 py-[13px] items-center mb-4">
      {NODE_TYPE_LABEL_MAP[type]}
      <RxCrossCircled
        onClick={() => deleteNode(data)}
        className="cursor-pointer"
      />
    </div>
  );
};

export default NodeHeader;
