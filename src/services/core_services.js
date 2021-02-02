import axios from "axios";

const API_GET_TASK =
  "http://localhost:3811/api/datask/task?id_user=1&task_date=2021-01-30";

const API_DELETE_TASK = "http://localhost:3811/api/datask/task";

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

export { getTaskProcess, deleteTaskById };
