import React, { useEffect, useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

import InsertTaskForm from "./forms/insert-task-form";
import { postTask } from "../../../../services/core_services";
import moment from "moment";

const ModalTask = (props) => {
  // ==================================== PROPS ====================================

  const { isModal, isToggle, formType, actionType } = props;

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

  const handleSubmit = (formType, data) => {
    switch (formType) {
      case "insert":
        // console.log(data, "datatosubmit

        postTask(data)
          .then((resp) => {
            alert("berhasil simpan!");
            console.log(resp.data);
            actionType(true);
            handleCloseModal();
          })
          .catch((error) => {
            console.log(error, "gagal simpan");
            alert("gagal simpan!");
            handleCloseModal();
          });
        break;
      case "edit":
        break;
    }
  };

  const handleButtonModals = (formType) => {
    if (formType === "insert" || formType === "edit") {
      return (
        <>
          <CButton
            color="info"
            onClick={() => handleSubmit(formType, initialState)}
          >
            Simpan
          </CButton>
        </>
      );
    }
  };

  // ==================================== USE EFFECT ====================================

  useEffect(handleShowModal, [isModal]);

  // ==================================== RETURN ====================================

  return (
    <CModal
      centered
      show={info}
      onClose={() => handleCloseModal()}
      color="info"
      closeOnBackdrop={false}
    >
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
        {handleButtonModals(formType)}
      </CModalFooter>
    </CModal>
  );
};

export default ModalTask;
