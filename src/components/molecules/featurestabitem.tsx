"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import styles from "./featurestabitem.module.scss";

export type Props = { title: string; description: string; icon: any };
export const Variants = { default: undefined, highlight: "E1298" };

export const DefaultProps: Props = {
  title: "Title",
  description: "Fully Featured Canvas Like Figma",
  icon: "var(--svgs-types-featuresIocns-canvas)",
};

export const timelineData = (id: string): msi.timeline.Timelines => ({
  OnScroll: {
    data: [
      {
        targets: ["." + id + "." + styles["E1302"] + ""],
        params: {
          easing: "linear",
          opacity: [
            {
              from: "1",
              to: "1",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 0,
            },
            {
              to: "0",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 1000,
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
            type: 3,
            value: "-100",
          },
          leave: {
            type: 3,
            value: "0",
          },
          element: "." + id + "." + styles["E1299"],
        },
        container: {
          enter: {
            type: 3,
            value: "70",
          },
          leave: {
            type: 3,
            value: "70",
          },
        },
        direction: 2,
        smoothness: {
          type: 1,
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
  variant,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  properties?: Props;
  variant?: (keyof typeof Variants)[];
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  const variants =
    variant?.map((id) => `${styles[(Variants as any)[id]]}`).join(" ") ?? "";
  const { timelines } = msi.timeline.useTimeline(
    timelineData(id),
    { OnScroll: msi.timeline.TimelineCommandOption.INIT },
    styles,
    rootElement.current,
  );
  return (
    <msi.resizeDetecter.ResponsiveDiv
      sizes={[
        { width: 180, className: ["w180px"] },
        { width: 120, className: ["w120px"] },
      ]}
      style={{ ...style }}
      className={`${className} ${variants} ${id} ${styles["E1299"]}`}
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
            <div className={`${variants} ${id} ${styles["E1303"]}`}>
              <div className={`${variants} ${id} ${styles["E1304"]}`}>
                <div className={`${variants} ${id} ${styles["E1302"]}`}>
                  <div
                    className={`${variants} ${id} ${styles["E1305"]}`}
                    style={msi.utils.toStyle({ image: properties?.icon })}
                  />
                </div>
                <div className={`${variants} ${id} ${styles["E1306"]}`}>
                  <div className={`${variants} ${id} ${styles["E1307"]}`}>
                    <span className={`${variants} ${id} ${styles["E1308"]}`}>
                      {msi.utils.toText(properties?.title) ?? "Canvas"}
                    </span>
                  </div>
                  <div className={`${variants} ${id} ${styles["E1309"]}`}>
                    <span className={`${variants} ${id} ${styles["E1310"]}`}>
                      {msi.utils.toText(properties?.description) ??
                        "Fully Featured Canvas Like Figma "}
                    </span>
                  </div>
                </div>
              </div>
              <div className={`${variants} ${id} ${styles["E1311"]}`} />
            </div>
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
