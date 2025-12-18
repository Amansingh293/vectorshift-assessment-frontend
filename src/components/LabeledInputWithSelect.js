import React from "react";
import { Input, Select } from "antd";

const LabeledInputWithSelect = ({
  currentLabel,
  handleLabelChange,
  currentType,
  handleTypeChange,
}) => {
  return (
    <div className="p-2 flex flex-col gap-2 mb-2 nodrag">
      <label className="flex gap-2">
        <span className="w-16">Name:</span>
        <Input
          value={currentLabel}
          onChange={handleLabelChange}
          placeholder="Enter name"
        />
      </label>
      <label className="flex gap-2">
        <span className="w-16">Type:</span>
        <Select
          className="w-full"
          value={currentType}
          onChange={handleTypeChange}
          options={[
            { value: "Text", label: "Text" },
            { value: "File", label: "File" },
          ]}
        />
      </label>
    </div>
  );
};

export default LabeledInputWithSelect;
