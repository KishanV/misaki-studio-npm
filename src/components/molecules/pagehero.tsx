"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import styles from "./pagehero.module.scss";

export type Props = { title: string; description: string; tag?: string };

export const DefaultProps: Props = {
  title: "Title.",
  description: "description.",
  tag: undefined,
};

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
    <msi.resizeDetecter.ResponsiveDiv
      sizes={[
        { width: 1000, className: ["w1000px"] },
        { width: 650, className: ["w650px"] },
        { width: 250, className: ["w250px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E940"]}`}
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
            {properties?.tag !== undefined ? (
              <div className={` ${id} ${styles["E941"]}`}>
                <div className={` ${id} ${styles["E942"]}`}>
                  <span className={` ${id} ${styles["E943"]}`}>
                    {msi.utils.toText(properties?.tag) ?? "Sample"}
                  </span>
                </div>
              </div>
            ) : undefined}
            <div className={` ${id} ${styles["E944"]}`}>
              <div className={` ${id} ${styles["E945"]}`}>
                <span className={` ${id} ${styles["E946"]}`}>
                  {msi.utils.toText(properties?.title) ?? "Our Pricing."}
                </span>
              </div>
            </div>
            <div className={` ${id} ${styles["E947"]}`}>
              <span className={` ${id} ${styles["E948"]}`}>
                {msi.utils.toText(properties?.description) ??
                  "Replace your React Component Code, CSS, and Test cases. even you can replace your entire front end code."}
              </span>
            </div>
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
