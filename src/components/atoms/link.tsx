"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import styles from "./link.module.scss";

export type Props = { text: string };
export const Variants = { default: undefined, active: "E1489" };

export const DefaultProps: Props = { text: "Link" };

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
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className} ${variants} ${id} ${styles["E1490"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <div className={`${variants} ${id} ${styles["E1491"]}`}>
        <span className={`${variants} ${id} ${styles["E1492"]}`}>
          {msi.utils.toText(properties?.text) ?? "Link"}
        </span>
      </div>
    </div>
  );
};
