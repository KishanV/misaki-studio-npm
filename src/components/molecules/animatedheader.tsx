"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import * as ComponentsMoleculesLandingpageeffect from "./landingpageeffect";
import * as ComponentsMoleculesHeader from "./header";
import styles from "./animatedheader.module.scss";

export type Props = { activeLink: string };

export const DefaultProps: Props = { activeLink: "none" };

export const timelineData = (id: string): msi.timeline.Timelines => ({
  OnScroll: {
    data: [
      {
        targets: ["." + id + "." + styles["E1157"] + ""],
        params: {
          easing: "linear",
          opacity: [
            {
              from: "0",
              to: "0",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 500,
            },
            {
              to: "1",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 500,
            },
          ],
        },
      },
      {
        targets: ["." + id + "." + styles["E1160"] + ""],
        params: {
          easing: "linear",
          translateY: [
            {
              from: "20px",
              to: "20px",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 0,
            },
            {
              to: "0px",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 500,
            },
          ],
        },
      },
    ],
    node: {
      name: "OnScroll",
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
          element: "." + id + "." + styles["E1154"],
        },
        container: {
          enter: {
            type: 2,
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
          value: 0.75,
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
  properties = DefaultProps,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  properties?: Props;
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  const { timelines } = msi.timeline.useTimeline(
    timelineData(id),
    { OnScroll: msi.timeline.TimelineCommandOption.INIT },
    styles,
    rootElement.current,
  );
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E1161"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <ComponentsMoleculesLandingpageeffect.Component
        className={` ${id} ${styles["E1162"]}`}
        divProps={{}}
      />
      <div className={` ${id} ${styles["E1154"]}`}>
        <ComponentsMoleculesHeader.Component
          className={` ${id} ${styles["E1160"]}`}
          divProps={{}}
          properties={{ activeLink: properties?.activeLink }}
        />
        <div className={` ${id} ${styles["E1157"]}`} />
      </div>
    </div>
  );
};
