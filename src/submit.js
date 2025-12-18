import { useState } from "react";
import CustomModal from "./components/CustomModal";
import { useStore } from "./store";
import { pipelineResponseMapper } from "./util";
import CustomButton from "./components/CustomButton";

export const SubmitButton = () => {
  const { nodes, edges } = useStore((s) => ({
    nodes: s.nodes,
    edges: s.edges,
  }));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleSubmit = async () => {
    setIsModalOpen(true);
    setIsLoading(true);
    try {
      const payload = {
        nodes: nodes.map((n) => ({
          id: n.id,
          type: n.type,
          position: n.position,
          data: n.data,
        })),
        edges: edges.map((e) => ({
          id: e.id,
          source: e.source,
          target: e.target,
        })),
      };

      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      setModalData(result);
    } catch (error) {
      console.error("Submit failed:", error);
      alert("Failed to submit pipeline");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomButton
        label="Submit"
        className="bg-purple-500 text-white py-2 px-4 rounded-xl"
        onClick={handleSubmit}
        hoverBgColor={"#7e22ce"}
      >
        Submit
      </CustomButton>

      {isModalOpen && (
        <CustomModal
          title={"Pipeline Submission Result"}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        >
          <div className="flex flex-col w-full items-start gap-3">
            {modalData &&
              Object.keys(modalData).map((item, i) => {
                return (
                  <p key={i} className="border-[1px] p-2 w-full rounded-lg">
                    {pipelineResponseMapper[item]}:{" "}
                    <strong>{JSON.stringify(modalData[item])}</strong>
                  </p>
                );
              })}
          </div>
        </CustomModal>
      )}
    </div>
  );
};
