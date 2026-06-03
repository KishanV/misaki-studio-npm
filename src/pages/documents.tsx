"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../settings/environment";
import { SVGs } from "../design-system/images";
import * as ComponentsAtomsMark from "../components/atoms/mark";
import * as ComponentsAtomsButton from "../components/atoms/button";
import * as ComponentsMoleculesPagehero from "../components/molecules/pagehero";
import * as ComponentsMoleculesAnimatedheader from "../components/molecules/animatedheader";
import * as ComponentsMoleculesFooter from "../components/molecules/footer";
import styles from "./documents.module.scss";

export const timelineData = (id: string): msi.timeline.Timelines => ({
  Untitled: {
    data: [],
    node: {
      name: "Untitled",
      seconds: 3,
      config: {
        type_: 4,
      },
      screen: 1,
    },
  },
});

export default ({
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
        { width: 1200, className: ["w1200px"] },
        { width: 700, className: ["w700px"] },
        { width: 400, className: ["w400px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E445"]}`}
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
            <ComponentsMoleculesAnimatedheader.Component
              className={` ${id} ${styles["E446"]}`}
              divProps={{}}
              properties={{ activeLink: "documents" }}
            />
            <ComponentsMoleculesPagehero.Component
              className={` ${id} ${styles["E447"]}`}
              divProps={{}}
              properties={{
                title: "Documents",
                description: "",
                tag: undefined,
              }}
            />
            <div className={` ${id} ${styles["E448"]}`}>
              <div className={` ${id} ${styles["E494"]}`}>
                <div className={` ${id} ${styles["E495"]}`}>
                  <div className={` ${id} ${styles["E496"]}`}>
                    <span className={` ${id} ${styles["E497"]}`}>
                      {"Explore best feature of Misaki Studio?"}
                    </span>
                  </div>
                  <div className={` ${id} ${styles["E498"]}`}>
                    <span className={` ${id} ${styles["E499"]}`}>
                      {
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                      }
                    </span>
                  </div>
                  <ComponentsAtomsButton.Component
                    className={` ${id} ${styles["E500"]}`}
                    divProps={{}}
                    properties={{ lable: "Youtube Video (Comming Soon)" }}
                    variant={["sizeSmall"]}
                  />
                </div>
                <div className={` ${id} ${styles["E501"]}`}>
                  <div className={` ${id} ${styles["E502"]}`}>
                    <span className={` ${id} ${styles["E503"]}`}>
                      {"Course: Misaki Studio in nutshell."}
                    </span>
                  </div>
                  <div className={` ${id} ${styles["E504"]}`}>
                    <span className={` ${id} ${styles["E505"]}`}>
                      {
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                      }
                    </span>
                  </div>
                  <ComponentsAtomsButton.Component
                    className={` ${id} ${styles["E506"]}`}
                    divProps={{}}
                    properties={{ lable: "Comming Soon" }}
                    variant={["sizeSmall"]}
                  />
                </div>
              </div>
            </div>
            <ComponentsMoleculesFooter.Component
              className={` ${id} ${styles["E464"]}`}
              divProps={{}}
            />
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
