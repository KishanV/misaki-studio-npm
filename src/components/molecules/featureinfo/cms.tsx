"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../../settings/environment";
import { SVGs } from "../../../design-system/images";
import * as ComponentsAtomsBullet from "../../atoms/bullet";
import styles from "./cms.module.scss";

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
                  <span className={` ${id} ${styles["E99"]}`}>{"CMS"}</span>
                </div>
                <div className={` ${id} ${styles["E100"]}`}>
                  <span className={` ${id} ${styles["E101"]}`}>
                    {"Coming soon"}
                  </span>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
