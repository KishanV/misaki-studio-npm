import * as ComponentsTemplatesDocumentcomponentCourseitem from "../../../components/templates/documentcomponent/courseitem";
import * as ComponentsTemplatesDocumentwrapper from "../../../components/templates/documentwrapper";
import * as DocumentsCourseIntroduction from "../../../documents/course/introduction";
import * as ComponentsTemplatesDocumentcomponentSummaryitem from "../../../components/templates/documentcomponent/summaryitem";
import React, { ReactNode } from "react";
import * as msi from "misaki-studio-internal";
import { documents } from "../documents";
const summary = [
  {
    id: "0836f3c0-947c-11f0-ad6b-5950b95d9e0d",
    level: 0,
    text: "Welcome to Misaki studio.",
  },
  {
    id: "fc6f3f10-947c-11f0-ad6b-5950b95d9e0d",
    level: 1,
    text: "What you can do?",
  },
  {
    id: "79e48e50-947d-11f0-ad6b-5950b95d9e0d",
    level: 1,
    text: "What Misaki Studio exports in code?",
  },
];
export default function Page() {
  return <DocumentsCourseIntroduction.Component />;
}
Page.getLayout = function getLayout(page: ReactNode) {
  return (
    <ComponentsTemplatesDocumentwrapper.Component
      properties={{}}
      children={{
        document: page,
        summary: (
          <msi.blog.BlogSummary
            key={"ae62e95d-c104-4c40-8175-79727e879a83"}
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
