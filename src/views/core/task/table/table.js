import React, { useEffect, useState } from "react";

import {
  CCard,
  CCardHeader,
  CCardBody,
  CDataTable,
  CBadge,
} from "@coreui/react";

import { getTaskProcess } from "../../../../services/core_services";

const TaskTable = () => {
  const [taskData, setTaskData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const handleGetTask = async () => {
    await getTaskProcess()
      .then((res) => {
        const arrTask = res.data.data.map((e, i) => {
          return {
            no: i + 1,
            nama_tugas: e.nama_task,
            durasi: e.task_duration,
            status: e.task_status,
          };
        });

        setTaskData(arrTask);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(taskData, "taskData");

  useEffect(() => {
    handleGetTask();
  }, []);

  const fields = ["no", "nama_tugas", "durasi", "status"];
  const getBadge = (status) => {
    switch (status) {
      case "Disetujui Atasan":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Ditolak Atasan":
        return "danger";
      default:
        return "primary";
    }
  };

  const column = {
    no: "Nomor",
    nama_tugas: "Nama Kegiatan",
    durasi: "Durasi (dalam menit)",
    status: "Status",
  };

  return (
    <div>
      <CCard>
        <CCardHeader>
          <b>My Task</b>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={taskData}
            columnHeaderSlot={column}
            fields={fields}
            itemsPerPage={5}
            pagination
            scopedSlots={{
              nama_tugas: (item) => (
                <td style={{ width: "400px" }}>{item.nama_tugas}</td>
              ),
              status: (item) => (
                <td>
                  <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                </td>
              ),
              durasi: (item, index) => {
                return <td>{item.durasi}</td>;
              },
            }}
          />
        </CCardBody>
      </CCard>
    </div>
  );
};

export default TaskTable;
