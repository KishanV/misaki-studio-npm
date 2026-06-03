"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import styles from "./productdemoitem.module.scss";

export type Props = { title: string; description: string; autoplay: boolean };
export const Variants = { default: undefined, highlight: "E790" };
export type Events = { animaitonComplete?: () => void };

export const DefaultProps: Props = {
  title: "Title",
  description: "Description text",
  autoplay: false,
};

export const timelineData = (id: string): msi.timeline.Timelines => ({
  ProgressBar: {
    data: [
      {
        targets: ["." + id + "." + styles["E793"] + ""],
        params: {
          easing: "linear",
          width: [
            {
              from: "0%",
              to: "0%",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 0,
            },
            {
              to: "100%",
              ease: "cubicBezier(0.250, 0.250, 0.750, 0.750)",
              delay: 0,
              duration: 10000,
            },
          ],
        },
      },
    ],
    node: {
      name: "ProgressBar",
      seconds: 10,
      listener: true,
      config: {
        type_: 3,
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
  events,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  properties?: Props;
  variant?: (keyof typeof Variants)[];
  events?: Events;
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  const variants =
    variant?.map((id) => `${styles[(Variants as any)[id]]}`).join(" ") ?? "";
  const { timelines } = msi.timeline.useTimeline(
    timelineData(id),
    properties?.autoplay === true
      ? { ProgressBar: msi.timeline.TimelineCommandOption.RE_PLAY }
      : true
        ? { ProgressBar: msi.timeline.TimelineCommandOption.PAUSE }
        : undefined,
    styles,
    rootElement.current,
  );
  msi.utils.useDidUpdateEffect({
    values: [timelines?.states?.ProgressBar?.complete],
    option: {
      debounce: false,
      delay: 10,
      runOnInit: false,
    },
    on: () => {
      if (timelines?.states?.ProgressBar?.complete === true) {
        events?.animaitonComplete?.();
      }
    },
  });
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className} ${variants} ${id} ${styles["E794"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <div className={`${variants} ${id} ${styles["E795"]}`}>
        <span className={`${variants} ${id} ${styles["E796"]}`}>
          {msi.utils.toText(properties?.title) ?? "Title\n"}
        </span>
      </div>
      <div className={`${variants} ${id} ${styles["E797"]}`}>
        <span className={`${variants} ${id} ${styles["E798"]}`}>
          {msi.utils.toText(properties?.description) ?? "description text"}
        </span>
      </div>
      <div className={`${variants} ${id} ${styles["E799"]}`}>
        <div className={`${variants} ${id} ${styles["E793"]}`} />
      </div>
    </div>
  );
};
