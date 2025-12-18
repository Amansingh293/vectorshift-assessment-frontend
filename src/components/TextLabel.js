import React, { useRef, useEffect } from "react";

const MAX_WIDTH = 400;
const CHAR_WIDTH = 8;
const LINE_HEIGHT = 18;

const TextLabel = ({ title, currText, handleTextChange }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    const naturalWidth = currText.length * CHAR_WIDTH + 20;
    const width = Math.min(Math.max(naturalWidth, 50), MAX_WIDTH);
    el.style.width = `${width}px`;

    el.style.height = "auto";

    const isWrapped = el.scrollHeight > LINE_HEIGHT + 2;

    if (isWrapped) {
      el.style.height = `${el.scrollHeight}px`;
    } else {
      el.style.height = "30px";
    }
  }, [currText]);

  return (
    <>
      {title && (
        <div>
          <span>{title}</span>
        </div>
      )}

      <textarea
        ref={textareaRef}
        value={currText}
        onChange={handleTextChange}
        rows={1}
        className="border-[1px] rounded-lg p-1 focus:outline-none focus:ring-0 focus:border-gray-300"
        style={{
          resize: "none",
          overflow: "hidden",
          minWidth: "350px",
          minHeight: "100px",
          lineHeight: `${LINE_HEIGHT}px`,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          transition: "width 0.1s ease, height 0.1s ease",
        }}
      />
    </>
  );
};

export default TextLabel;
