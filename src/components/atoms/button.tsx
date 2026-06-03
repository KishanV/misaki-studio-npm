"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import styles from "./button.module.scss";

export type Props = { lable: string };
export const Variants = {
  default: undefined,
  sizeSmall: "E1038",
  typeSecondary: "E1039",
  plain: "E1040",
};
export type Children = { left?: React.ReactNode; right?: React.ReactNode };

export const DefaultProps: Props = { lable: "Button" };

export const Component = ({
  className = "",
  style,
  divProps,
  properties = DefaultProps,
  variant,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  properties?: Props;
  variant?: (keyof typeof Variants)[];
  children?: Children;
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
      tabIndex={0}
      className={`${className} ${variants} ${id} ${styles["E1041"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      {children?.left !== undefined ? (
        <div className={`${variants} ${id} ${styles["E1042"]}`}>
          {children?.left}
        </div>
      ) : undefined}
      <div className={`${variants} ${id} ${styles["E1043"]}`}>
        <span className={`${variants} ${id} ${styles["E1044"]}`}>
          {msi.utils.toText(properties?.lable) ?? "Button"}
        </span>
      </div>
      {children?.right !== undefined ? (
        <div className={`${variants} ${id} ${styles["E1045"]}`}>
          {children?.right}
        </div>
      ) : undefined}
    </div>
  );
};
