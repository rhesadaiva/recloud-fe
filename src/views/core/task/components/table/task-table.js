import React, { useEffect, useState } from "react";

import { CDataTable, CBadge, CButton, CRow } from "@coreui/react";

import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

import { getTaskProcess } from "../../../../../services/core_services";

const TaskTable = (props) => {
  const [taskData, setTaskData] = useState([]);

  const { isToggle } = props;

  const handleGetTask = async () => {
    await getTaskProcess()
      .then((res) => {
        const arrTask = res.data.data.map((e, i) => {
          return {
            no: i + 1,
            nama_tugas: e.nama_task,
            durasi: e.task_duration,
            status: e.task_status,
            kd_status: e.fl_status_task,
          };
        });

        setTaskData(arrTask);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleGetTask();
  }, []);

  const fields = ["no", "nama_tugas", "durasi", "status", "aksi"];
  const getBadge = (kd_status) => {
    switch (kd_status) {
      case 30:
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case 40:
        return "danger";
      default:
        return "primary";
    }
  };

  const column = {
    no: "No",
    nama_tugas: "Nama Kegiatan",
    durasi: "Durasi (menit)",
    status: "Status",
    aksi: "Aksi",
  };

  const handleButtonAksi = (kd_status) => {
    switch (kd_status) {
      case 10:
        return (
          <>
            <CButton
              shape="pill"
              color="info"
              className="kirimTask mr-2"
              title="Kirim Tugas"
            >
              <CIcon content={freeSet.cilEnvelopeClosed} />
            </CButton>

            <CButton
              shape="pill"
              color="info"
              className="previewTask mr-2"
              title="Detil Tugas"
            >
              <CIcon content={freeSet.cilZoom} />
            </CButton>

            <CButton
              shape="pill"
              color="info"
              className="editTask mr-2"
              title="Edit Tugas"
            >
              <CIcon content={freeSet.cilPen} />
            </CButton>

            <CButton
              shape="pill"
              color="info"
              className="deleteTask mr-2"
              title="Hapus Tugas"
            >
              <CIcon content={freeSet.cilDelete} />
            </CButton>
          </>
        );

      case 20:
        return (
          <>
            <CButton
              shape="pill"
              color="info"
              className="previewTask mr-2"
              title="Detil Tugas"
            >
              <CIcon content={freeSet.cilZoom} />
            </CButton>
          </>
        );
      case 30:
        return (
          <>
            <CButton
              color="info"
              shape="pill"
              className="previewTask mr-2"
              title="Detil Tugas"
              onClick={() => isToggle("detail")}
            >
              <CIcon content={freeSet.cilZoom} />
            </CButton>
          </>
        );
      case 40:
        return (
          <>
            <CButton
              shape="pill"
              color="info"
              className="kirimTask mr-2"
              title="Kirim Tugas"
            >
              <CIcon content={freeSet.cilEnvelopeClosed} />
            </CButton>

            <CButton
              shape="pill"
              color="info"
              className="previewTask mr-2"
              title="Detil Tugas"
            >
              <CIcon content={freeSet.cilZoom} />
            </CButton>

            <CButton
              shape="pill"
              color="info"
              className="editTask mr-2"
              title="Edit Tugas"
            >
              <CIcon content={freeSet.cilPen} />
            </CButton>

            <CButton
              shape="pill"
              color="info"
              className="deleteTask mr-2"
              title="Hapus Tugas"
            >
              <CIcon content={freeSet.cilDelete} />
            </CButton>
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <div>
      <CDataTable
        items={taskData}
        columnHeaderSlot={column}
        striped
        fields={fields}
        itemsPerPage={5}
        pagination
        scopedSlots={{
          nama_tugas: (item) => (
            <td style={{ width: "300px" }}>{item.nama_tugas}</td>
          ),
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.kd_status)}>{item.status}</CBadge>
            </td>
          ),
          durasi: (item, index) => {
            return <td>{item.durasi}</td>;
          },
          aksi: (item) => (
            <td>
              <CRow>{handleButtonAksi(item.kd_status)}</CRow>
            </td>
          ),
        }}
      />
    </div>
  );
};

export default TaskTable;
