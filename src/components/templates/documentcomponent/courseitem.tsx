"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../../settings/environment";
import { SVGs } from "../../../design-system/images";
import styles from "./courseitem.module.scss";

export type Props = { title: string; isSelected: boolean; icon?: string };
export type Events = { open?: () => void; click?: () => void };

export const DefaultProps: Props = {
  title: "Default",
  isSelected: false,
  icon: "right",
};

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
      className={`${className}  ${id} ${styles["E1468"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <div
        className={` ${id} ${styles["E1469"]}${properties?.isSelected === true ? ` ${styles["E1470"]}` : ""}`}
        onClick={(originalEvent) => {
          const event = msi.utils.prepareMouseEvent(originalEvent);
          events?.click?.();
        }}
      >
        {properties?.icon === "right" ? (
          <div className={` ${id} ${styles["E1471"]}`}>
            {
              <svg
                preserveAspectRatio="meet"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                color="currentColor"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" />
              </svg>
            }
          </div>
        ) : undefined}
        {properties?.icon === "bottom" ? (
          <div className={` ${id} ${styles["E1472"]}`}>
            {
              <svg
                preserveAspectRatio="meet"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                color="currentColor"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" />
              </svg>
            }
          </div>
        ) : undefined}
        {properties?.icon === "round" || properties?.icon === undefined ? (
          <div className={` ${id} ${styles["E1473"]}`}>
            <div className={` ${id} ${styles["E1474"]}`} />
          </div>
        ) : undefined}
        <div className={` ${id} ${styles["E1475"]}`}>
          <span className={` ${id} ${styles["E1476"]}`}>
            {msi.utils.toText(properties?.title) ?? "Sample"}
          </span>
        </div>
      </div>
    </div>
  );
};
