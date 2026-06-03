"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import * as ComponentsMoleculesHeaderlinks from "./headerlinks";
import * as ComponentsAtomsButton from "../atoms/button";
import * as ComponentsAtomsMenubutton from "../atoms/menubutton";
import styles from "./header.module.scss";
import * as StorageAuth from "../../storage/auth";

export type Props = { activeLink: string };
export type States = { isMenuOpen: boolean };

export const DefaultProps: Props = { activeLink: "none" };

export const Component = ({
  className = "",
  style,
  divProps,
  properties = DefaultProps,
  onStatesChange,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  properties?: Props;
  onStatesChange?: (states: States) => void;
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
  const globalStorage = msi.storage.useStorage(
    "global",
    StorageAuth.StorageInstant,
  );
  const storages = { global: globalStorage.state };
  const screen_738 = (parameter: {}) => {
    return (
      <>
        {states?.isMenuOpen === true ? (
          <msi.resizeDetecter.ResponsiveDiv
            sizes={[
              { width: 900, className: ["w900px"] },
              { width: 750, className: ["w750px"] },
              { width: 400, className: ["w400px"] },
            ]}
            style={{ ...style }}
            className={` ${id} ${styles["E739"]}`}
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
                  <ComponentsMoleculesHeaderlinks.Component
                    className={` ${id} ${styles["E740"]}`}
                    divProps={{}}
                    properties={{ activeLink: properties?.activeLink }}
                    events={{
                      onUse: () => {
                        const states = getState();
                        states.isMenuOpen = false;
                        setState(states);
                      },
                    }}
                    variant={["columns"]}
                  />
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
        { width: 900, className: ["w900px"] },
        { width: 750, className: ["w750px"] },
        { width: 400, className: ["w400px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E741"]}`}
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
            <div className={` ${id} ${styles["E742"]}`}>
              <div
                className={` ${id} ${styles["E743"]}`}
                onClick={(originalEvent) => {
                  const event = msi.utils.prepareMouseEvent(originalEvent);
                  router.push("/", undefined, { scroll: false }).then(() => {
                    document
                      .querySelector("#__next")
                      ?.scrollTo({ top: 0, left: 0 });
                  });
                }}
              />
              <div className={` ${id} ${styles["E744"]}`}>
                <span className={` ${id} ${styles["E745"]}`}>
                  {"Misaki Studio"}
                </span>
              </div>
            </div>
            <div className={` ${id} ${styles["E746"]}`}>
              {screen !== "w750px" && screen !== "w400px" ? (
                <>
                  <ComponentsMoleculesHeaderlinks.Component
                    className={` ${id} ${styles["E747"]}`}
                    divProps={{}}
                    properties={{ activeLink: properties?.activeLink }}
                  />
                </>
              ) : undefined}
            </div>
            <div className={` ${id} ${styles["E748"]}`}>
              {screen !== "w750px" && screen !== "w400px" ? (
                <>
                  <ComponentsAtomsButton.Component
                    className={` ${id} ${styles["E749"]}`}
                    divProps={{
                      onClick: (originalEvent) => {
                        const event =
                          msi.utils.prepareMouseEvent(originalEvent);
                        if (storages?.global?.user?.isLoggedIn === false) {
                          router
                            .push("/sign-in", undefined, { scroll: false })
                            .then(() => {
                              document
                                .querySelector("#__next")
                                ?.scrollTo({ top: 0, left: 0 });
                            });
                        } else {
                          router
                            .push("/dashboard", undefined, { scroll: false })
                            .then(() => {
                              document
                                .querySelector("#__next")
                                ?.scrollTo({ top: 0, left: 0 });
                            });
                        }
                      },
                    }}
                    properties={
                      storages?.global?.user?.isLoggedIn === true
                        ? { lable: "Dashboard" }
                        : true
                          ? { lable: "Get Started" }
                          : ComponentsAtomsButton.DefaultProps
                    }
                  />
                </>
              ) : undefined}
              {screen !== "w900px" ? (
                <>
                  <msi.popup.ReactRootElementPopup
                    isVisible={states?.isMenuOpen === true ? true : false}
                    action="none"
                    popupAlignmentProps={{
                      xType: "right-edge",
                      yType: "bottom",
                      minWidth: "100%",
                      yMargin: 6,
                      xMargin: 0,
                      autoRemove: true,
                      style: {
                        background: "transparent",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "row",
                        color: "#000",
                        padding: "0px",
                        border: "0px solid #ddd",
                        boxShadow: "rgb(0 0 0 / 0%) 0px 0px 0px 0px",
                      },
                    }}
                    onInteractOutsidePopup={(event) => {
                      const states = getState();
                      states.isMenuOpen = false;
                      setState(states);
                    }}
                    children={(param) => <>{screen_738({})}</>}
                    parent={(param) => (
                      <>
                        <ComponentsAtomsMenubutton.Component
                          className={` ${id} ${styles["E750"]}`}
                          divProps={{
                            ref: (element) => {
                              element && param?.setRef(element as HTMLElement);
                            },
                            onClick: (originalEvent) => {
                              const event =
                                msi.utils.prepareMouseEvent(originalEvent);
                              if (states?.isMenuOpen === true) {
                                const states = getState();
                                states.isMenuOpen = false;
                                setState(states);
                              } else if (states?.isMenuOpen === false) {
                                const states = getState();
                                states.isMenuOpen = true;
                                setState(states);
                              }
                            },
                          }}
                        />
                      </>
                    )}
                  />
                </>
              ) : undefined}
            </div>
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
