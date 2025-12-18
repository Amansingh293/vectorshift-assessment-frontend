import React, { useEffect, useState } from "react";
import BaseNode from "./BaseNode";
import CustomButton from "../components/CustomButton";

const TimerNode = ({ id, data }) => {
  const [inputTime, setInputTime] = useState("00:00:10");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timeToSeconds = (time) => {
    const [h = 0, m = 0, s = 0] = time.split(":").map(Number);
    return h * 3600 + m * 60 + s;
  };

  const secondsToTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, "0");
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const startTimer = () => {
    const secs = timeToSeconds(inputTime);
    if (secs > 0) {
      setSecondsLeft(secs);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <BaseNode id={id} data={data}>
      <div className="flex flex-col gap-2 text-sm ">
        <input
          type="text"
          placeholder="HH:MM:SS"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
          className="rounded border px-2 py-1"
        />

        <div className="rounded border px-2 py-1 text-center font-mono">
          {secondsToTime(secondsLeft)}
        </div>

        <div className="flex w-full justify-between items-center gap-2">
          <CustomButton
            className="rounded bg-purple-500 px-2 py-1 text-white min-w-1/2 w-full"
            onClick={startTimer}
            hoverBgColor={"#7e22ce"}
          >
            Start
          </CustomButton>
          {isRunning && (
            <CustomButton
              hoverBgColor={"#b91c1c"}
              onClick={stopTimer}
              className="rounded bg-red-600 px-2 py-1 text-white  w-1/2"
            >
              Stop
            </CustomButton>
          )}
        </div>
      </div>
    </BaseNode>
  );
};

export default TimerNode;
