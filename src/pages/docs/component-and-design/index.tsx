import * as ComponentsTemplatesDocumentcomponentCourseitem from "../../../components/templates/documentcomponent/courseitem";
import * as ComponentsTemplatesDocumentwrapper from "../../../components/templates/documentwrapper";
import * as DocumentsCourseComponentanddesign from "../../../documents/course/componentanddesign";
import * as ComponentsTemplatesDocumentcomponentSummaryitem from "../../../components/templates/documentcomponent/summaryitem";
import React, { ReactNode } from "react";
import * as msi from "misaki-studio-internal";
import { documents } from "../documents";
export default function Page() {
  return <DocumentsCourseComponentanddesign.Component />;
}
Page.getLayout = function getLayout(page: ReactNode) {
  return (
    <ComponentsTemplatesDocumentwrapper.Component
      properties={{}}
      children={{
        document: page,
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
