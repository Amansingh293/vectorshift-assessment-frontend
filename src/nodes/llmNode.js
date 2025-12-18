// llmNode.js

import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data}>
      <div className="flex flex-col gap-2 text-sm min-w-56 max-w-96">
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-system`}
          style={{ top: `${100 / 3}%` }}
        />
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-prompt`}
          style={{ top: `${200 / 3}%` }}
        />

        <div>
          <span>This is a LLM. We can extend functionality in this</span>
        </div>
        <Handle type="source" position={Position.Right} id={`${id}-response`} />
      </div>
    </BaseNode>
  );
};
