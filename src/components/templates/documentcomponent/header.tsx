"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../../settings/environment";
import { SVGs } from "../../../design-system/images";
import * as ComponentsAtomsMenubutton from "../../atoms/menubutton";
import styles from "./header.module.scss";

export type Events = { clickOnMenu?: () => void };

export const Component = ({
  className = "",
  style,
  divProps,
  events,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  events?: Events;
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  return (
    <msi.resizeDetecter.ResponsiveDiv
      sizes={[
        { width: 900, className: ["w900px"] },
        { width: 700, className: ["w700px"] },
        { width: 400, className: ["w400px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E41"]}`}
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
            <div className={` ${id} ${styles["E42"]}`}>
              <div
                className={` ${id} ${styles["E43"]}`}
                onClick={(originalEvent) => {
                  const event = msi.utils.prepareMouseEvent(originalEvent);
                  router.push("/", undefined, { scroll: false }).then(() => {
                    document
                      .querySelector("#__next")
                      ?.scrollTo({ top: 0, left: 0 });
                  });
                }}
              />
              <div
                className={` ${id} ${styles["E44"]}`}
                onClick={(originalEvent) => {
                  const event = msi.utils.prepareMouseEvent(originalEvent);
                  router
                    .push("/docs/", undefined, { scroll: false })
                    .then(() => {
                      document
                        .querySelector("#__next")
                        ?.scrollTo({ top: 0, left: 0 });
                    });
                }}
              >
                <span className={` ${id} ${styles["E45"]}`}>{"Documents"}</span>
              </div>
            </div>
            {screen !== "w700px" && screen !== "w400px" ? (
              <>
                <div
                  className={` ${id} ${styles["E46"]}`}
                  onClick={(originalEvent) => {
                    const event = msi.utils.prepareMouseEvent(originalEvent);
                    router
                      .push("/download/", undefined, { scroll: false })
                      .then(() => {
                        document
                          .querySelector("#__next")
                          ?.scrollTo({ top: 0, left: 0 });
                      });
                  }}
                >
                  <span className={` ${id} ${styles["E47"]}`}>
                    {"Download App"}
                  </span>
                </div>
              </>
            ) : undefined}
            {screen !== "w900px" ? (
              <>
                <ComponentsAtomsMenubutton.Component
                  className={` ${id} ${styles["E48"]}`}
                  divProps={{
                    onClick: (originalEvent) => {
                      const event = msi.utils.prepareMouseEvent(originalEvent);
                      events?.clickOnMenu?.();
                    },
                  }}
                />
              </>
            ) : undefined}
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
