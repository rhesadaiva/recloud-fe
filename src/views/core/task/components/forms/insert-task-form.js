import React, { useEffect, useState } from "react";
import { CFormGroup, CLabel, CInput, CCol } from "@coreui/react";

const InsertTaskForm = (props) => {
  // ==================================== PROPS ====================================
  const { formType, returnData } = props;

  // ==================================== STATE ====================================
  const [state, setState] = useState();

  // ==================================== FUNCTION ====================================
  const handleNamaCompany = (e) => {
    setState(e.target.value);
  };

  // ==================================== USE EFFECT ====================================

  useEffect(() => {
    returnData(state);
  }, [state]);

  // ==================================== RETURN ====================================

  return (
    <>
      <CFormGroup>
        <CLabel htmlFor="company">Company</CLabel>
        <CInput
          id="company"
          disabled={formType === "detail" ? true : false}
          placeholder="Enter your company name"
          onChange={handleNamaCompany}
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="vat">VAT</CLabel>
        <CInput
          id="vat"
          disabled={formType === "detail" ? true : false}
          placeholder="DE1234567890"
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="street">Street</CLabel>
        <CInput
          id="street"
          disabled={formType === "detail" ? true : false}
          placeholder="Enter street name"
        />
      </CFormGroup>
      <CFormGroup row className="my-0">
        <CCol xs="8">
          <CFormGroup>
            <CLabel htmlFor="city">City</CLabel>
            <CInput
              id="city"
              disabled={formType === "detail" ? true : false}
              placeholder="Enter your city"
            />
          </CFormGroup>
        </CCol>
        <CCol xs="4">
          <CFormGroup>
            <CLabel htmlFor="postal-code">Postal Code</CLabel>
            <CInput
              id="postal-code"
              disabled={formType === "detail" ? true : false}
              placeholder="Postal Code"
            />
          </CFormGroup>
        </CCol>
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="country">Country</CLabel>
        <CInput
          id="country"
          disabled={formType === "detail" ? true : false}
          placeholder="Country name"
        />
      </CFormGroup>
    </>
  );
};

export default InsertTaskForm;
