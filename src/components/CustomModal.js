import React, { useCallback, useState } from "react";
import { Button, Modal } from "antd";

const CustomModal = ({
  title,
  isModalOpen,
  setIsModalOpen,
  isLoading,
  setIsLoading,
  children,
}) => {
  const handleOkOrCancel = useCallback(() => {
    setIsModalOpen(false);
    setIsLoading(false);
  }, []);

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onCancel={handleOkOrCancel}
      onOk={handleOkOrCancel}
      confirmLoading={isLoading}
      okButtonProps={{
        style: {
          backgroundColor: "#a855f7",
          borderColor: "#a855f7",
        },
      }}
      cancelButtonProps={{
        className: "custom-cancel-btn",
      }}
    >
      {children}
    </Modal>
  );
};
export default CustomModal;
