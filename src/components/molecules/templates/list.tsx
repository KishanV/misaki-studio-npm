"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../../settings/environment";
import { SVGs } from "../../../design-system/images";
import styles from "./list.module.scss";

export type Children = { list?: React.ReactNode };

export const Component = ({
  className = "",
  style,
  divProps,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  children?: Children;
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E1284"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <div className={` ${id} ${styles["E1285"]}`}>
        <div className={` ${id} ${styles["E1286"]}`}>
          <div className={` ${id} ${styles["E1287"]}`}>
            <span className={` ${id} ${styles["E1288"]}`}>
              {"MADE IN MISAKI STUDIO"}
            </span>
          </div>
        </div>
      </div>
      <div className={` ${id} ${styles["E1289"]}`}>
        <div className={` ${id} ${styles["E1290"]}`}>{children?.list}</div>
      </div>
    </div>
  );
};
