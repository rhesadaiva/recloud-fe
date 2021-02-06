import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_GET_TASK =
  "http://47.254.249.19:3811/api/datask/task?id_user=1&task_date=2021-02-05";

const API_DELETE_TASK = "http://47.254.249.19:3811/api/datask/task";

const API_POST_TASK = "http://47.254.249.19:3811/api/datask/task";

// GET TASK
const getTaskProcess = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_GET_TASK)
      .then((response) => {
        if (response.status === 200) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteTaskById = (id_task) => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_DELETE_TASK, { data: { id_task: id_task } })
      .then((response) => {
        if (response.status === 200) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const postTask = (payload) => {
  const {
    nama_task,
    uraian_task,
    task_start,
    task_end,
    task_duration,
    assignee_id,
    assignor_id,
  } = payload;

  return new Promise((resolve, reject) => {
    axios
      .post(API_POST_TASK, {
        nama_task: nama_task,
        uraian_task: uraian_task,
        task_start: task_start,
        task_end: task_end,
        task_duration: task_duration,
        assignee_id: assignee_id,
        assignor_id: assignor_id,
      })
      .then((response) => {
        if (response.status === 201) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// const saveTask = ()

export { getTaskProcess, deleteTaskById, postTask };
