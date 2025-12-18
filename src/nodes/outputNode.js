// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";
import LabeledInputWithSelect from "../components/LabeledInputWithSelect";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (value) => {
    setOutputType(value);
  };
  return (
    <BaseNode id={id} data={data}>
      <LabeledInputWithSelect
        currentLabel={currName}
        handleLabelChange={handleNameChange}
        currentType={outputType}
        handleTypeChange={handleTypeChange}
      />
      <Handle type="target" position={Position.Left} id={`${id}-value`} />
    </BaseNode>
  );
};
