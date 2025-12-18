import { useEffect, useState } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";
import BaseNode from "./BaseNode";
import TextLabel from "../components/TextLabel";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    const varPattern = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const foundVars = new Set();
    let match;
    while ((match = varPattern.exec(currText)) !== null) {
      foundVars.add(match[1]);
    }
    setVariables([...foundVars]);
  }, [currText]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [id, updateNodeInternals, variables]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode id={id} data={data}>
      <TextLabel currText={currText} handleTextChange={handleTextChange} />

      <Handle type="source" position={Position.Right} id={`${id}-output`} />

      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: 40 + index * 20, zIndex: 5 }}
        />
      ))}
    </BaseNode>
  );
};
