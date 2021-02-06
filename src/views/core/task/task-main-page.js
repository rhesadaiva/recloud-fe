import React, { useState } from "react";

import { CCard, CCardHeader, CCardBody, CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";

import TaskTable from "./components/table/task-table";
import TaskModals from "./components/task-modals";

const TaskMain = () => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState();

  const [actionModal, setActionModal] = useState(false);

  // const

  const toggleModal = (type) => {
    setModal(!modal);
    setModalType(type);
  };

  return (
    <div>
      <CCard>
        <CCardHeader>
          <b className={"float-left mb-0"} style={{ fontSize: "20px" }}>
            Daftar Penugasan Saya
          </b>
          <CButton
            className={"float-right mb-0"}
            shape="pill"
            color="primary"
            onClick={() => {
              toggleModal("insert");
            }}
          >
            <CIcon name="cil-lightbulb" />
            Tambah Tugas
          </CButton>
        </CCardHeader>
        <CCardBody>
          <TaskTable
            isToggle={(type) => toggleModal(type)}
            hasAction={actionModal}
          />
        </CCardBody>
      </CCard>

      <TaskModals
        isModal={modal}
        isToggle={(type) => toggleModal(type)}
        formType={modalType}
        actionType={(data) => setActionModal(data)}
      />
    </div>
  );
};

export default TaskMain;
