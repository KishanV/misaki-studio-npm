"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../../settings/environment";
import { SVGs } from "../../../design-system/images";
import * as ComponentsAtomsBullet from "../../atoms/bullet";
import styles from "./design.module.scss";

export const timelineData = (id: string): msi.timeline.Timelines => ({
  Design: {
    data: [
      {
        targets: ["." + id + "." + styles["E86"] + ""],
        params: {
          easing: "linear",
          top: [
            {
              from: "100px",
              to: "100px",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 0,
            },
            {
              to: "-100px",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 1000,
            },
          ],
        },
      },
    ],
    node: {
      name: "Design",
      seconds: 1,
      config: {
        model: 2,
        type_: 2,
        target: {
          enter: {
            type: 2,
            value: "0",
          },
          leave: {
            type: 4,
            value: "0",
          },
          element: "." + id + "." + styles["E83"],
        },
        container: {
          enter: {
            type: 4,
            value: "0",
          },
          leave: {
            type: 2,
            value: "0",
          },
        },
        direction: 2,
        smoothness: {
          type: 0,
          value: 0.25,
        },
      },
      screen: 1,
    },
  },
  Animation: {
    data: [
      {
        targets: ["." + id + "." + styles["E90"] + ""],
        params: {
          easing: "linear",
          translateY: [
            {
              from: "100px",
              to: "100px",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 0,
            },
            {
              to: "-100px",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 1000,
            },
          ],
        },
      },
    ],
    node: {
      name: "Animation",
      seconds: 1,
      config: {
        model: 2,
        type_: 2,
        target: {
          enter: {
            type: 2,
            value: "0",
          },
          leave: {
            type: 4,
            value: "0",
          },
          element: "." + id + "." + styles["E87"],
        },
        container: {
          enter: {
            type: 4,
            value: "0",
          },
          leave: {
            type: 2,
            value: "0",
          },
        },
        direction: 2,
        smoothness: {
          type: 0,
          value: 0.25,
        },
      },
      screen: 1,
    },
  },
});

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
  const { timelines } = msi.timeline.useTimeline(
    timelineData(id),
    {
      Design: msi.timeline.TimelineCommandOption.INIT,
      Animation: msi.timeline.TimelineCommandOption.INIT,
    },
    styles,
    rootElement.current,
  );
  return (
    <msi.resizeDetecter.ResponsiveDiv
      sizes={[
        { width: 1000, className: ["w1000px"] },
        { width: 750, className: ["w750px"] },
        { width: 350, className: ["w350px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E91"]}`}
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
            <div className={` ${id} ${styles["E92"]}`}>
              <div className={` ${id} ${styles["E93"]}`} />
            </div>
            <div className={` ${id} ${styles["E94"]}`}>
              <div className={` ${id} ${styles["E95"]}`} />
            </div>
            <div className={` ${id} ${styles["E96"]}`}>
              <div className={` ${id} ${styles["E97"]}`}>
                <div className={` ${id} ${styles["E98"]}`}>
                  <span className={` ${id} ${styles["E99"]}`}>
                    {"Design System"}
                  </span>
                </div>
                <div className={` ${id} ${styles["E100"]}`}>
                  <span className={` ${id} ${styles["E101"]}`}>
                    {
                      "Advanced design system with color tokens and multiple theme support (not just dark/light). It also helps centralize other properties to maintain and scale your project. "
                    }
                  </span>
                </div>
              </div>
              <div className={` ${id} ${styles["E83"]}`}>
                <div className={` ${id} ${styles["E102"]}`}>
                  <div className={` ${id} ${styles["E103"]}`}>
                    <span className={` ${id} ${styles["E104"]}`}>
                      {"Themes"}
                    </span>
                  </div>
                  <div className={` ${id} ${styles["E105"]}`}>
                    <span className={` ${id} ${styles["E106"]}`}>
                      {
                        "Multi level themes support with inheritance on by default theme to all the way to target theme. all the design system token can be configured separately."
                      }
                    </span>
                  </div>
                </div>
                <div className={` ${id} ${styles["E109"]}`}>
                  <div className={` ${id} ${styles["E110"]}`}>
                    <div className={` ${id} ${styles["E111"]}`}>
                      <div className={` ${id} ${styles["E86"]}`} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={` ${id} ${styles["E112"]}`}>
                <div className={` ${id} ${styles["E113"]}`}>
                  <div className={` ${id} ${styles["E114"]}`}>
                    <span className={` ${id} ${styles["E115"]}`}>
                      {"Tokens"}
                    </span>
                  </div>
                  <div className={` ${id} ${styles["E583"]}`}>
                    <span className={` ${id} ${styles["E584"]}`}>
                      {
                        "Currently it supports color tokens with three standard levels: primitive, semantic, and alias."
                      }
                    </span>
                  </div>
                  <div className={` ${id} ${styles["E585"]}`}>
                    <span className={` ${id} ${styles["E586"]}`}>
                      {
                        "In addition to color tokens, you can also configure fonts, border radius, images, and spacing."
                      }
                    </span>
                  </div>
                </div>
                <div className={` ${id} ${styles["E87"]}`}>
                  <div className={` ${id} ${styles["E118"]}`}>
                    <div className={` ${id} ${styles["E119"]}`}>
                      <div className={` ${id} ${styles["E90"]}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
