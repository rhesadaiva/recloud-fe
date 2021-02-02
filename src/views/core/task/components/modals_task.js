import React, { useEffect, useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const ModalTask = (props) => {
  const { isModal, isToggle } = props;

  const [info, setInfo] = useState(false);

  const handleShowModal = () => {
    isModal ? setInfo(!info) : setInfo(info);
  };

  const handleCloseModal = () => {
    setInfo(!info);
    isToggle(false);
  };

  useEffect(handleShowModal, [isModal]);

  return (
    <CModal centered show={info} onClose={() => setInfo(!info)} color="info">
      <CModalHeader closeButton>
        <CModalTitle>Tambah Tugas Baru</CModalTitle>
      </CModalHeader>
      <CModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => handleCloseModal()}>
          Cancel
        </CButton>
        <CButton color="info" onClick={() => handleCloseModal()}>
          Do Something
        </CButton>{" "}
      </CModalFooter>
    </CModal>
  );
};

export default ModalTask;
