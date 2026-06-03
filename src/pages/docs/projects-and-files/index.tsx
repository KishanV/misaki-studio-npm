import * as ComponentsTemplatesDocumentcomponentCourseitem from "../../../components/templates/documentcomponent/courseitem";
import * as ComponentsTemplatesDocumentwrapper from "../../../components/templates/documentwrapper";
import * as DocumentsCourseProjectsandfiles from "../../../documents/course/projectsandfiles";
import * as ComponentsTemplatesDocumentcomponentSummaryitem from "../../../components/templates/documentcomponent/summaryitem";
import React, { ReactNode } from "react";
import * as msi from "misaki-studio-internal";
import { documents } from "../documents";
const summary = [
  {
    id: "dc0bc0e0-94b3-11f0-9425-af5f455763f1",
    level: 0,
    text: "Project and Files",
  },
  { id: "1d4d9320-94b5-11f0-9425-af5f455763f1", level: 1, text: "Project" },
  { id: "5907e120-94b7-11f0-9425-af5f455763f1", level: 1, text: "Files" },
  { id: "d54b43d0-952a-11f0-bc9f-7f64da207667", level: 0, text: "Tutorials" },
  {
    id: "e48e9540-952a-11f0-bc9f-7f64da207667",
    level: 1,
    text: "How to create and open project?",
  },
  {
    id: "2a7a35f0-952b-11f0-bc9f-7f64da207667",
    level: 1,
    text: "How to create files and folders?",
  },
];
export default function Page() {
  return <DocumentsCourseProjectsandfiles.Component />;
}
Page.getLayout = function getLayout(page: ReactNode) {
  return (
    <ComponentsTemplatesDocumentwrapper.Component
      properties={{}}
      children={{
        document: page,
        summary: (
          <msi.blog.BlogSummary
            key={"7792e10e-d92b-46a9-bf4b-b6b246dff07a"}
            list={summary}
            itemWrapper={(item) => (
              <ComponentsTemplatesDocumentcomponentSummaryitem.Component
                events={item.events}
                properties={item.properties}
                style={item.style}
              />
            )}
          />
        ),
        list: (
          <msi.blog.BlogSideBar
            list={documents}
            itemWrapper={(item) => (
              <ComponentsTemplatesDocumentcomponentCourseitem.Component
                events={item.events}
                properties={item.properties}
                style={item.style}
              />
            )}
          />
        ),
      }}
    />
  );
};
