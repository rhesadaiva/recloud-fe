import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
  CTabContent,
  CTabPane,
} from "@coreui/react";

import TaskMain from "./task/task-main-page";

import { CIcon } from "@coreui/icons-react";

const ListGroups = () => {
  const [activeTab, setActiveTab] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <CRow>
        <CCol>
          <CCard accentColor="success">
            <CCardHeader>
              <b>Core App</b>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="3">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem
                      onClick={() => setActiveTab(0)}
                      action
                      active={activeTab === 0}
                    >
                      <CIcon name="cil-list" size="lg" /> <b>That Task</b>
                    </CListGroupItem>
                    <CListGroupItem
                      onClick={() => setActiveTab(1)}
                      action
                      active={activeTab === 1}
                    >
                      <b>Kehadiran</b>
                    </CListGroupItem>
                  </CListGroup>
                </CCol>
                <CCol xs="9">
                  <CTabContent>
                    <CTabPane active={activeTab === 0}>
                      <TaskMain />
                    </CTabPane>
                    <CTabPane active={activeTab === 1}>
                      <p>
                        Cupidatat quis ad sint excepteur laborum in esse qui. Et
                        excepteur consectetur ex nisi eu do cillum ad laborum.
                        Mollit et eu officia dolore sunt Lorem culpa qui commodo
                        velit ex amet id ex. Officia anim incididunt laboris
                        deserunt anim aute dolor incididunt veniam aute dolore
                        do exercitation. Dolor nisi culpa ex ad irure in elit eu
                        dolore. Ad laboris ipsum reprehenderit irure non commodo
                        enim culpa commodo veniam incididunt veniam ad.
                      </p>
                    </CTabPane>
                  </CTabContent>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default ListGroups;
