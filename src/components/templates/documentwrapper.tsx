"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import styles from "./documentwrapper.module.scss";

export type Props = { path?: string };
export type States = { isMenuOpen: boolean };
export type Children = {
  list?: React.ReactNode;
  document?: React.ReactNode;
  summary?: React.ReactNode;
};

export const DefaultProps: Props = { path: undefined };

export const Component = ({
  className = "",
  style,
  divProps,
  properties = DefaultProps,
  onStatesChange,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  properties?: Props;
  onStatesChange?: (states: States) => void;
  children?: Children;
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  const {
    state: states,
    getState,
    setState: setStateFn,
  } = msi.storage.useStates<States>({ isMenuOpen: false });
  const setState = (states: States) => {
    if (setStateFn(states)) onStatesChange?.(states);
  };
  msi.utils.useDidUpdateEffect({
    values: [children?.document],
    option: {
      debounce: false,
      delay: 100,
      runOnInit: false,
    },
    on: () => {
      const states = getState();
      states.isMenuOpen = false;
      setState(states);
    },
  });
  const screen_960 = (parameter: { untitled: string }) => {
    return (
      <>
        {states?.isMenuOpen === true ? (
          <msi.resizeDetecter.ResponsiveDiv
            sizes={[
              { width: 1200, className: ["w1200px"] },
              { width: 1000, className: ["w1000px"] },
              { width: 400, className: ["w400px"] },
            ]}
            style={{ ...style }}
            className={` ${id} ${styles["E961"]}`}
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
                  <div
                    className={` ${id} ${styles["E962"]}`}
                    onClick={(originalEvent) => {
                      const event = msi.utils.prepareMouseEvent(originalEvent);
                      const states = getState();
                      states.isMenuOpen = false;
                      setState(states);
                    }}
                  />
                  <div className={` ${id} ${styles["E963"]}`}>
                    {children?.list}
                  </div>
                </>
              );
            }}
          </msi.resizeDetecter.ResponsiveDiv>
        ) : undefined}
      </>
    );
  };
  return (
    <msi.resizeDetecter.ResponsiveDiv
      sizes={[
        { width: 1200, className: ["w1200px"] },
        { width: 1000, className: ["w1000px"] },
        { width: 400, className: ["w400px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E964"]}`}
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
            {screen !== "w1200px" && screen !== "w1000px" ? (
              <>
                <div className={` ${id} ${styles["E965"]}`}>
                  <div
                    className={` ${id} ${styles["E966"]}`}
                    onClick={(originalEvent) => {
                      const event = msi.utils.prepareMouseEvent(originalEvent);
                      router
                        .push("/", undefined, { scroll: false })
                        .then(() => {
                          document
                            .querySelector("#__next")
                            ?.scrollTo({ top: 0, left: 0 });
                        });
                    }}
                  >
                    <div
                      className={` ${id} ${styles["E967"]}`}
                      onClick={(originalEvent) => {
                        const event =
                          msi.utils.prepareMouseEvent(originalEvent);
                        router
                          .push("/", undefined, { scroll: false })
                          .then(() => {
                            document
                              .querySelector("#__next")
                              ?.scrollTo({ top: 0, left: 0 });
                          });
                      }}
                    />
                    <div className={` ${id} ${styles["E968"]}`}>
                      <span className={` ${id} ${styles["E969"]}`}>
                        {"Documents"}
                      </span>
                    </div>
                  </div>
                  <div
                    className={` ${id} ${styles["E970"]}`}
                    onClick={(originalEvent) => {
                      const event = msi.utils.prepareMouseEvent(originalEvent);
                      const states = getState();
                      states.isMenuOpen = true;
                      setState(states);
                    }}
                  >
                    <div className={` ${id} ${styles["E971"]}`}>
                      {
                        <svg
                          preserveAspectRatio="original"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          color="currentColor"
                          fill="none"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M4 5L16 5" />
                          <path d="M4 12L20 12" />
                          <path d="M4 19L12 19" />
                        </svg>
                      }
                    </div>
                  </div>
                </div>
              </>
            ) : undefined}
            <div className={` ${id} ${styles["E972"]}`}>
              {screen !== "w400px" ? (
                <>
                  <div className={` ${id} ${styles["E973"]}`}>
                    <div
                      className={` ${id} ${styles["E974"]}`}
                      onClick={(originalEvent) => {
                        const event =
                          msi.utils.prepareMouseEvent(originalEvent);
                        router
                          .push("/", undefined, { scroll: false })
                          .then(() => {
                            document
                              .querySelector("#__next")
                              ?.scrollTo({ top: 0, left: 0 });
                          });
                      }}
                    >
                      <div
                        className={` ${id} ${styles["E975"]}`}
                        onClick={(originalEvent) => {
                          const event =
                            msi.utils.prepareMouseEvent(originalEvent);
                          router
                            .push("/", undefined, { scroll: false })
                            .then(() => {
                              document
                                .querySelector("#__next")
                                ?.scrollTo({ top: 0, left: 0 });
                            });
                        }}
                      />
                      <div className={` ${id} ${styles["E976"]}`}>
                        <span className={` ${id} ${styles["E977"]}`}>
                          {"Documents"}
                        </span>
                      </div>
                    </div>
                    {children?.list}
                  </div>
                </>
              ) : undefined}
              <div
                className={` ${id} ${styles["E978"]}${children?.summary === undefined ? ` ${styles["E979"]}` : ""}`}
              >
                <div className={` ${id} ${styles["E980"]}`}>
                  <div className={` ${id} ${styles["E981"]}`}>
                    {children?.document}
                  </div>
                </div>
              </div>
              {screen !== "w1000px" && screen !== "w400px" ? (
                <>
                  {children?.summary !== undefined ? (
                    <div className={` ${id} ${styles["E982"]}`}>
                      <div className={` ${id} ${styles["E983"]}`}>
                        <span className={` ${id} ${styles["E984"]}`}>
                          {"On this page"}
                        </span>
                      </div>
                      {children?.summary}
                    </div>
                  ) : undefined}
                </>
              ) : undefined}
            </div>
            {screen_960(
              undefined === undefined
                ? { untitled: "test" }
                : { untitled: "test" },
            )}
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
