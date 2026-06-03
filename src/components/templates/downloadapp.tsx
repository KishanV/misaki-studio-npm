"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import * as ComponentsTemplatesFormsSignup from "./forms/signup";
import * as ComponentsTemplatesFormsSignin from "./forms/signin";
import styles from "./downloadapp.module.scss";

export type Events = {
  download?: () => void;
  open?: () => void;
  playground?: () => void;
};

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
      className={`${className}  ${id} ${styles["E278"]}`}
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
            <div className={` ${id} ${styles["E326"]}`}>
              <div className={` ${id} ${styles["E327"]}`}>
                <div className={` ${id} ${styles["E328"]}`}>
                  <div className={` ${id} ${styles["E329"]}`}>
                    <div className={` ${id} ${styles["E330"]}`}>
                      <span className={` ${id} ${styles["E331"]}`}>
                        {"Open Project"}
                      </span>
                    </div>
                    <div className={` ${id} ${styles["E332"]}`}>
                      <span className={` ${id} ${styles["E333"]}`}>
                        {
                          "Please download the app if you haven't already. Currently, project editing is only available in the app."
                        }
                      </span>
                    </div>
                  </div>
                  <div className={` ${id} ${styles["E334"]}`}>
                    <div
                      tabIndex={0}
                      className={` ${id} ${styles["E335"]}`}
                      onClick={(originalEvent) => {
                        const event =
                          msi.utils.prepareMouseEvent(originalEvent);
                        events?.download?.();
                      }}
                    >
                      <div className={` ${id} ${styles["E336"]}`}>
                        <span className={` ${id} ${styles["E337"]}`}>
                          {"Download App"}
                        </span>
                      </div>
                      <div className={` ${id} ${styles["E338"]}`} />
                    </div>
                    <div
                      tabIndex={0}
                      className={` ${id} ${styles["E339"]}`}
                      onClick={(originalEvent) => {
                        const event =
                          msi.utils.prepareMouseEvent(originalEvent);
                        events?.open?.();
                      }}
                    >
                      <div className={` ${id} ${styles["E340"]}`}>
                        <span className={` ${id} ${styles["E341"]}`}>
                          {"Open App"}
                        </span>
                      </div>
                      <div className={` ${id} ${styles["E342"]}`} />
                    </div>
                  </div>
                  <div className={` ${id} ${styles["E343"]}`} />
                  <div className={` ${id} ${styles["E344"]}`}>
                    <span className={` ${id} ${styles["E345"]}`}>{"Or"}</span>
                  </div>
                  <div
                    tabIndex={0}
                    className={` ${id} ${styles["E346"]}`}
                    onClick={(originalEvent) => {
                      const event = msi.utils.prepareMouseEvent(originalEvent);
                      events?.playground?.();
                    }}
                  >
                    <div className={` ${id} ${styles["E347"]}`}>
                      <span className={` ${id} ${styles["E348"]}`}>
                        {"Try app in Playground"}
                      </span>
                    </div>
                    <div className={` ${id} ${styles["E349"]}`} />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
