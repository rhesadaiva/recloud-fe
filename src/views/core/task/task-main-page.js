import React, { useEffect, useState } from "react";

import { CCard, CCardHeader, CCardBody, CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";

import TaskTable from "./components/table/table";
import TaskModals from "./components/modals_task";

const TaskMain = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  // const

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
              toggleModal();
            }}
          >
            <CIcon name="cil-lightbulb" />
            Tambah Tugas
          </CButton>
        </CCardHeader>
        <CCardBody>
          <TaskTable />
        </CCardBody>
      </CCard>

      <TaskModals isModal={modal} isToggle={(modal) => setModal(modal)} />
    </div>
  );
};

export default TaskMain;
