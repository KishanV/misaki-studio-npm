"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../../settings/environment";
import { SVGs } from "../../../design-system/images";
import * as ComponentsTemplatesDocumentcomponentWelcomevideoitem from "./welcomevideoitem";
import styles from "./welcome.module.scss";

export const Component = ({
  className = "",
  style,
  divProps,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  return (
    <msi.resizeDetecter.ResponsiveDiv
      sizes={[
        { width: 1000, className: ["w1000px"] },
        { width: 500, className: ["w500px"] },
        { width: 320, className: ["w320px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E595"]}`}
      divProps={{
        ...divProps,
        ref: (element) => {
          (rootElement as any).current = element;
          divProps?.ref?.(element);
        },
      }}
    >
      {(screen) => {
        return (
          <>
            <div className={` ${id} ${styles["E596"]}`}>
              <div className={` ${id} ${styles["E597"]}`}>
                <div className={` ${id} ${styles["E598"]}`}>
                  <div className={` ${id} ${styles["E599"]}`} />
                  <div className={` ${id} ${styles["E600"]}`} />
                </div>
              </div>
              <div className={` ${id} ${styles["E601"]}`}>
                <div className={` ${id} ${styles["E602"]}`} />
              </div>
            </div>
            <div className={` ${id} ${styles["E603"]}`}>
              <div className={` ${id} ${styles["E604"]}`}>
                <div className={` ${id} ${styles["E605"]}`}>
                  <span className={` ${id} ${styles["E606"]}`}>
                    {"Documents"}
                  </span>
                </div>
              </div>
              <div className={` ${id} ${styles["E607"]}`}>
                <span className={` ${id} ${styles["E608"]}`}>
                  {
                    "Best place to learn and know about Misaki studio. Play this tutorials, they are mind-blowing."
                  }
                </span>
              </div>
            </div>
            <div className={` ${id} ${styles["E609"]}`}>
              <ComponentsTemplatesDocumentcomponentWelcomevideoitem.Component
                className={` ${id} ${styles["E610"]}`}
                divProps={{}}
                properties={{
                  title: "Create Button + Export Code.",
                  tumbnail: "var(--svgs-types-blog-buttons)",
                }}
              />
              <ComponentsTemplatesDocumentcomponentWelcomevideoitem.Component
                className={` ${id} ${styles["E611"]}`}
                divProps={{}}
                properties={{
                  title: "Build Slider.",
                  tumbnail: "var(--svgs-types-blog-slider)",
                }}
              />
              <ComponentsTemplatesDocumentcomponentWelcomevideoitem.Component
                className={` ${id} ${styles["E612"]}`}
                divProps={{}}
                properties={{
                  title: "Design System.",
                  tumbnail: "var(--svgs-types-blog-designSystem)",
                }}
              />
              <ComponentsTemplatesDocumentcomponentWelcomevideoitem.Component
                className={` ${id} ${styles["E613"]}`}
                divProps={{}}
                properties={{
                  title: "Timeline Animation.",
                  tumbnail: "var(--svgs-types-blog-timeline)",
                }}
              />
              <ComponentsTemplatesDocumentcomponentWelcomevideoitem.Component
                className={` ${id} ${styles["E614"]}`}
                divProps={{}}
                properties={{
                  title: "Full Editor Tour.",
                  tumbnail: "var(--svgs-types-blog-editor)",
                }}
              />
              <ComponentsTemplatesDocumentcomponentWelcomevideoitem.Component
                className={` ${id} ${styles["E615"]}`}
                divProps={{}}
                properties={{
                  title: "Landing Page.",
                  tumbnail: "var(--svgs-types-blog-page)",
                }}
              />
              <ComponentsTemplatesDocumentcomponentWelcomevideoitem.Component
                className={` ${id} ${styles["E616"]}`}
                divProps={{}}
                properties={{
                  title: "Logic.",
                  tumbnail: "var(--svgs-types-blog-logic)",
                }}
                children={{}}
              />
            </div>
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
