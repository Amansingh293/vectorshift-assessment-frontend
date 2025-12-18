// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";
import LabeledInputWithSelect from "../components/LabeledInputWithSelect";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (value) => {
    setInputType(value);
  };

  return (
    <BaseNode id={id} data={data}>
      <LabeledInputWithSelect
        currentLabel={currName}
        handleLabelChange={handleNameChange}
        currentType={inputType}
        handleTypeChange={handleTypeChange}
      />
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </BaseNode>
  );
};
