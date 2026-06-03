"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../../settings/environment";
import { SVGs } from "../../../design-system/images";
import styles from "./summaryitem.module.scss";

export type Props = { title: string; isSelected: boolean };
export type Events = { click?: () => void };

export const DefaultProps: Props = { title: "SummaryItem", isSelected: true };

export const Component = ({
  className = "",
  style,
  divProps,
  properties = DefaultProps,
  events,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  properties?: Props;
  events?: Events;
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E1499"]}${properties?.isSelected === true ? ` ${styles["E1500"]}` : ""}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
      onClick={(originalEvent) => {
        const event = msi.utils.prepareMouseEvent(originalEvent);
        events?.click?.();
        divProps?.onClick?.(originalEvent);
      }}
    >
      <div className={` ${id} ${styles["E1501"]}`}>
        <span className={` ${id} ${styles["E1502"]}`}>
          {msi.utils.toText(properties?.title) ?? "Text"}
        </span>
      </div>
    </div>
  );
};
