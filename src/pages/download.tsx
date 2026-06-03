"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../settings/environment";
import { SVGs } from "../design-system/images";
import * as ComponentsAtomsButton from "../components/atoms/button";
import * as ComponentsAtomsMark from "../components/atoms/mark";
import * as ComponentsMoleculesPagehero from "../components/molecules/pagehero";
import * as ComponentsMoleculesAnimatedheader from "../components/molecules/animatedheader";
import * as ComponentsMoleculesFooter from "../components/molecules/footer";
import styles from "./download.module.scss";

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
              properties={{ activeLink: "download" }}
            />
            <ComponentsMoleculesPagehero.Component
              className={` ${id} ${styles["E447"]}`}
              divProps={{}}
              properties={{
                title: "Download.",
                description: "",
                tag: undefined,
              }}
            />
            <div className={` ${id} ${styles["E448"]}`}>
              <div className={` ${id} ${styles["E530"]}`}>
                <div className={` ${id} ${styles["E531"]}`}>
                  <div className={` ${id} ${styles["E532"]}`}>
                    <div className={` ${id} ${styles["E533"]}`}>
                      <div className={` ${id} ${styles["E534"]}`}>
                        <span className={` ${id} ${styles["E535"]}`}>
                          {"Mac\n"}
                        </span>
                      </div>
                      <div className={` ${id} ${styles["E536"]}`} />
                    </div>
                    <div className={` ${id} ${styles["E537"]}`}>
                      <div className={` ${id} ${styles["E538"]}`}>
                        <span className={` ${id} ${styles["E539"]}`}>
                          {"M1\n"}
                        </span>
                      </div>
                      <div className={` ${id} ${styles["E540"]}`} />
                      <ComponentsAtomsButton.Component
                        className={` ${id} ${styles["E541"]}`}
                        divProps={{
                          onClick: (originalEvent) => {
                            const event =
                              msi.utils.prepareMouseEvent(originalEvent);
                            router
                              .push(
                                "https://download.misakistudio.io/misaki-studio-arm64.dmg",
                                undefined,
                                { scroll: false },
                              )
                              .then(() => {
                                document
                                  .querySelector("#__next")
                                  ?.scrollTo({ top: 0, left: 0 });
                              });
                          },
                        }}
                        properties={{ lable: "Download" }}
                        variant={["sizeSmall"]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={` ${id} ${styles["E542"]}`}>
                <div className={` ${id} ${styles["E543"]}`}>
                  <div className={` ${id} ${styles["E544"]}`}>
                    <div className={` ${id} ${styles["E545"]}`}>
                      <div className={` ${id} ${styles["E546"]}`}>
                        <span className={` ${id} ${styles["E547"]}`}>
                          {"Windows\n"}
                        </span>
                      </div>
                      <div className={` ${id} ${styles["E548"]}`} />
                    </div>
                    <div className={` ${id} ${styles["E549"]}`}>
                      <div className={` ${id} ${styles["E550"]}`}>
                        <span className={` ${id} ${styles["E551"]}`}>
                          {"Intel\n"}
                        </span>
                      </div>
                      <div className={` ${id} ${styles["E552"]}`} />
                      <ComponentsAtomsButton.Component
                        className={` ${id} ${styles["E553"]}`}
                        divProps={{
                          onClick: (originalEvent) => {
                            const event =
                              msi.utils.prepareMouseEvent(originalEvent);
                            router
                              .push(
                                "https://download.misakistudio.io/misaki-studio-setup.exe",
                                undefined,
                                { scroll: false },
                              )
                              .then(() => {
                                document
                                  .querySelector("#__next")
                                  ?.scrollTo({ top: 0, left: 0 });
                              });
                          },
                        }}
                        properties={{ lable: "Download" }}
                        variant={["sizeSmall"]}
                      />
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
