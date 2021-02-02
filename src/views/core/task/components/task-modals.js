import React, { useEffect, useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormGroup,
  CLabel,
  CInput,
  CCol,
} from "@coreui/react";

import InsertTaskForm from "./forms/insert-task-form";

const ModalTask = (props) => {
  // ==================================== PROPS ====================================

  const { isModal, isToggle, formType } = props;

  // ==================================== STATE ====================================

  const [info, setInfo] = useState(false);

  const [initialState, setInitialState] = useState();

  // ==================================== FUNCTION ====================================
  const handleShowModal = () => {
    if (isModal) {
      setInfo(!info);
    } else {
      setInfo(info);
    }
  };

  const handleCloseModal = () => {
    setInfo(!info);
    isToggle(false);
  };

  const handleModalBody = () => {
    return (
      <>
        <InsertTaskForm
          formType={formType}
          returnData={(data) => setInitialState(data)}
        />
      </>
    );
  };

  const handleSubmit = (data) => {
    alert(data, "data");
  };

  // ==================================== USE EFFECT ====================================

  useEffect(handleShowModal, [isModal]);

  // ==================================== RETURN ====================================

  return (
    <CModal centered show={info} onClose={() => setInfo(!info)} color="info">
      <CModalHeader>
        <CModalTitle>
          {formType === "insert" ? "Tambah Data Baru" : "Detail Tugas"}
        </CModalTitle>
      </CModalHeader>
      <CModalBody>{handleModalBody()}</CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => handleCloseModal()}>
          Kembali
        </CButton>
        <CButton color="info" onClick={() => handleSubmit(initialState)}>
          {formType === "insert" ? "Simpan" : null}
        </CButton>{" "}
      </CModalFooter>
    </CModal>
  );
};

export default ModalTask;
