import React from "react";
import NodeHeader from "../components/NodeHeader";

const BaseNode = ({ customClassName, id, data, children, ...props }) => {
  return (
    <div
      className={`h-fit w-fit border-2 rounded-md p-2 bg-white shadow-md ${
        customClassName || ""
      }`}
      {...props}
    >
      <NodeHeader data={data} type={data?.nodeType} id={id} />
      {children}
    </div>
  );
};

export default BaseNode;
