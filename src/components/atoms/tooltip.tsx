"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import styles from "./tooltip.module.scss";

export type Props = { text: string };

export const DefaultProps: Props = { text: "Tooltip" };

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
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E644"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <div className={` ${id} ${styles["E645"]}`}>
        <div className={` ${id} ${styles["E646"]}`}>
          <span className={` ${id} ${styles["E647"]}`}>
            {msi.utils.toText(properties?.text) ?? "Tooltip"}
          </span>
        </div>
      </div>
    </div>
  );
};
