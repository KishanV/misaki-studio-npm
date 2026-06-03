"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../../settings/environment";
import { SVGs } from "../../../design-system/images";
import styles from "./item.module.scss";

export type Props = { title: string; description: string };
export type Events = { open?: () => void };
export type Children = { image?: React.ReactNode };

export const DefaultProps: Props = { title: "Title", description: "..." };

export const Component = ({
  className = "",
  style,
  divProps,
  properties = DefaultProps,
  events,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  properties?: Props;
  events?: Events;
  children?: Children;
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E1168"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
      onClick={(originalEvent) => {
        const event = msi.utils.prepareMouseEvent(originalEvent);
        events?.open?.();
        divProps?.onClick?.(originalEvent);
      }}
    >
      <div className={` ${id} ${styles["E1169"]}`}>
        <div className={` ${id} ${styles["E1170"]}`}>
          <div className={` ${id} ${styles["E1171"]}`}>
            <span className={` ${id} ${styles["E1172"]}`}>
              {msi.utils.toText(properties?.title) ?? "Our Production Website"}
            </span>
          </div>
          <div className={` ${id} ${styles["E1173"]}`}>
            <span className={` ${id} ${styles["E1174"]}`}>
              {msi.utils.toText(properties?.description) ??
                "Click on card and open this example in playgound."}
            </span>
          </div>
        </div>
        <div className={` ${id} ${styles["E1175"]}`}>{children?.image}</div>
      </div>
    </div>
  );
};
