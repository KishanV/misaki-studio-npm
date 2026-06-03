"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import styles from "./footer.module.scss";

export const Component = ({
  className = "",
  style,
  divProps,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E250"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <div className={` ${id} ${styles["E251"]}`}>
        <div className={` ${id} ${styles["E252"]}`}>
          <div className={` ${id} ${styles["E253"]}`} />
          <div className={` ${id} ${styles["E254"]}`} />
        </div>
      </div>
      <div className={` ${id} ${styles["E255"]}`}>
        <div
          className={` ${id} ${styles["E256"]}`}
          onClick={(originalEvent) => {
            const event = msi.utils.prepareMouseEvent(originalEvent);
            router
              .push("https://x.com/MisakiStudio_", undefined, { scroll: false })
              .then(() => {
                document
                  .querySelector("#__next")
                  ?.scrollTo({ top: 0, left: 0 });
              });
          }}
        >
          <div className={` ${id} ${styles["E257"]}`} />
        </div>
        <div
          className={` ${id} ${styles["E258"]}`}
          onClick={(originalEvent) => {
            const event = msi.utils.prepareMouseEvent(originalEvent);
            router
              .push("https://discord.gg/DxVBjjy5Gh", undefined, {
                scroll: false,
              })
              .then(() => {
                document
                  .querySelector("#__next")
                  ?.scrollTo({ top: 0, left: 0 });
              });
          }}
        >
          <div className={` ${id} ${styles["E259"]}`} />
        </div>
        <div
          className={` ${id} ${styles["E260"]}`}
          onClick={(originalEvent) => {
            const event = msi.utils.prepareMouseEvent(originalEvent);
            router
              .push(
                "https://www.linkedin.com/company/misaki-studio",
                undefined,
                { scroll: false },
              )
              .then(() => {
                document
                  .querySelector("#__next")
                  ?.scrollTo({ top: 0, left: 0 });
              });
          }}
        >
          <div className={` ${id} ${styles["E261"]}`} />
        </div>
      </div>
      <div className={` ${id} ${styles["E262"]}`}>
        <span className={` ${id} ${styles["E263"]}`}>
          {"© 2026 Misaki Studio. All rights reserved\n"}
        </span>
      </div>
    </div>
  );
};
