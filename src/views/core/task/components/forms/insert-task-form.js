import React, { useEffect, useState } from "react";
import {
  CFormGroup,
  CLabel,
  CInput,
  CCol,
  CTextarea,
  CRow,
} from "@coreui/react";

import Helper from "../../../../../helpers/aio_helpers";

const InsertTaskForm = (props) => {
  // ==================================== PROPS ====================================
  const { formType, returnData } = props;

  // ==================================== STATE ====================================

  // const [diffTime, setDiffTime] = useState();

  const initialState = {
    nama_task: "",
    uraian_task: "",
    task_start: "",
    task_end: "",
    task_date: Helper.generateDateNow(),
    // task_duration: "",
    assignee_id: 1,
    assignor_id: null,
  };
  const [state, setState] = useState(initialState);
  const [showDuration, setShowDuration] = useState();

  // ==================================== FUNCTION ====================================

  const handleEntryForm = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });

    // let diff = Helper.countDifferenceTime(state.task_start, state.task_end);
    // setShowDuration(diff);
    // let newObj = Object.assign(state);
    // newObj.task_duration = diff;
  };

  const handleTimeDuration = () => {
    let diff = Helper.countDifferenceTime(state.task_start, state.task_end);
    setShowDuration(diff);
    let newObj = Object.assign(state);
    newObj.task_duration = diff;
  };
  // ==================================== USE EFFECT ====================================

  useEffect(() => {
    returnData(state);
    console.log(state, "state");
    handleTimeDuration();
  }, [state]);

  // ==================================== RETURN ====================================

  return (
    <>
      <CFormGroup>
        <CLabel htmlFor="date">Tanggal Tugas</CLabel>
        <CInput
          id="date"
          type="date"
          disabled
          name="task_date"
          value={state.task_date}
        />
      </CFormGroup>
      <CFormGroup>
        <CRow>
          <CCol xs="6">
            <CLabel htmlFor="street">Waktu Mulai</CLabel>
            <CInput
              type="time"
              name="task_start"
              disabled={formType === "detail" ? true : false}
              onChange={handleEntryForm}
            />
          </CCol>
          <CCol xs="6">
            <CLabel htmlFor="street">Waktu Selesai</CLabel>
            <CInput
              type="time"
              name="task_end"
              disabled={formType === "detail" ? true : false}
              onChange={handleEntryForm}
            />
          </CCol>
        </CRow>
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="company">Nama Tugas</CLabel>
        <CInput
          id="company"
          disabled={formType === "detail" ? true : false}
          name="nama_task"
          value={state.nama_task}
          onChange={handleEntryForm}
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="vat">Detil Tugas</CLabel>
        <CTextarea
          name="uraian_task"
          id="textarea-input"
          rows="2"
          onChange={handleEntryForm}
        />
      </CFormGroup>

      <CFormGroup>
        <CLabel htmlFor="duration">Durasi Tugas</CLabel>
        <CInput
          id="duration"
          name="task_duration"
          value={showDuration}
          disabled
          // onKeyup={handleEntryForm}
        />
      </CFormGroup>
    </>
  );
};

export default InsertTaskForm;
