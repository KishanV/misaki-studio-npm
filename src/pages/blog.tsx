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
import styles from "./blog.module.scss";

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
              properties={{ activeLink: "blog" }}
            />
            <ComponentsMoleculesPagehero.Component
              className={` ${id} ${styles["E447"]}`}
              divProps={{}}
              properties={{ title: "Blog", description: "", tag: undefined }}
            />
            <div className={` ${id} ${styles["E448"]}`}>
              <div className={` ${id} ${styles["E449"]}`}>
                <div
                  className={` ${id} ${styles["E450"]}`}
                  onClick={(originalEvent) => {
                    const event = msi.utils.prepareMouseEvent(originalEvent);
                    router
                      .push("/blogs/thestevejobways/", undefined, {
                        scroll: false,
                      })
                      .then(() => {
                        document
                          .querySelector("#__next")
                          ?.scrollTo({ top: 0, left: 0 });
                      });
                  }}
                >
                  <div className={` ${id} ${styles["E451"]}`} />
                  <div className={` ${id} ${styles["E452"]}`}>
                    <div className={` ${id} ${styles["E453"]}`}>
                      <span className={` ${id} ${styles["E454"]}`}>
                        {"The Steve Jobs Ways"}
                      </span>
                    </div>
                    <div className={` ${id} ${styles["E455"]}`}>
                      <span className={` ${id} ${styles["E456"]}`}>
                        {"It should just work design to code, instantly."}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={` ${id} ${styles["E457"]}`}
                  onClick={(originalEvent) => {
                    const event = msi.utils.prepareMouseEvent(originalEvent);
                    router
                      .push("/blogs/introduction/", undefined, {
                        scroll: false,
                      })
                      .then(() => {
                        document
                          .querySelector("#__next")
                          ?.scrollTo({ top: 0, left: 0 });
                      });
                  }}
                >
                  <div className={` ${id} ${styles["E458"]}`} />
                  <div className={` ${id} ${styles["E459"]}`}>
                    <div className={` ${id} ${styles["E460"]}`}>
                      <span className={` ${id} ${styles["E461"]}`}>
                        {"The Misaki Studio"}
                      </span>
                    </div>
                    <div className={` ${id} ${styles["E462"]}`}>
                      <span className={` ${id} ${styles["E463"]}`}>
                        {
                          "A full blown editor to create user interface and website."
                        }
                      </span>
                    </div>
                  </div>
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
