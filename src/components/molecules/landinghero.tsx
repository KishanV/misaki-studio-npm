"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import * as ComponentsAtomsButton from "../atoms/button";
import styles from "./landinghero.module.scss";

export const timelineData = (id: string): msi.timeline.Timelines => ({
  Untitled: {
    data: [
      {
        targets: ["." + id + "." + styles["E655"] + ""],
        params: {
          easing: "linear",
          scale: [
            {
              from: "1",
              to: "1",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 0,
            },
            {
              to: "1",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 1510,
            },
            {
              to: "0.75",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 240,
            },
            {
              to: "1",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 250,
            },
          ],
        },
      },
    ],
    node: {
      name: "Untitled",
      seconds: 3,
      loop: true,
      config: {
        on: {
          type_: 2,
        },
        type_: 1,
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
    { Untitled: msi.timeline.TimelineCommandOption.INIT },
    styles,
    rootElement.current,
  );
  return (
    <msi.resizeDetecter.ResponsiveDiv
      sizes={[
        { width: 1000, className: ["w1000px"] },
        { width: 650, className: ["w650px"] },
        { width: 250, className: ["w250px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E656"]}`}
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
            <div className={` ${id} ${styles["E657"]}`}>
              <span className={` ${id} ${styles["E658"]}`}>
                {"Currently In Beta"}
              </span>
            </div>
            <div className={` ${id} ${styles["E659"]}`}>
              <div className={` ${id} ${styles["E660"]}`}>
                <span className={` ${id} ${styles["E661"]}`}>{"Design."}</span>
              </div>
              <div className={` ${id} ${styles["E662"]}`}>
                <span className={` ${id} ${styles["E663"]}`}>{"Animate."}</span>
              </div>
              <div className={` ${id} ${styles["E664"]}`}>
                <span className={` ${id} ${styles["E665"]}`}>
                  {"to Code. "}
                </span>
              </div>
            </div>
            <div className={` ${id} ${styles["E666"]}`}>
              <span className={` ${id} ${styles["E667"]}`}>
                {
                  "Design and animate very easily  working web pages and web components with logic. then export it to react.js, next.js and css."
                }
              </span>
            </div>
            <div className={` ${id} ${styles["E668"]}`}>
              <ComponentsAtomsButton.Component
                className={` ${id} ${styles["E669"]}`}
                divProps={{
                  onClick: (originalEvent) => {
                    const event = msi.utils.prepareMouseEvent(originalEvent);
                    router
                      .push("/sign-in", undefined, { scroll: false })
                      .then(() => {
                        document
                          .querySelector("#__next")
                          ?.scrollTo({ top: 0, left: 0 });
                      });
                  },
                }}
                properties={{ lable: "Get Started" }}
                variant={["typeSecondary"]}
              />
              <ComponentsAtomsButton.Component
                className={` ${id} ${styles["E670"]}`}
                divProps={{
                  onClick: (originalEvent) => {
                    const event = msi.utils.prepareMouseEvent(originalEvent);
                    router
                      .push("/playground", undefined, { scroll: false })
                      .then(() => {
                        document
                          .querySelector("#__next")
                          ?.scrollTo({ top: 0, left: 0 });
                      });
                  },
                }}
                properties={{ lable: "Try in Playground" }}
              />
            </div>
            <div className={` ${id} ${styles["E671"]}`}>
              <div className={` ${id} ${styles["E655"]}`} />
            </div>
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
