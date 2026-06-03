"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import * as ComponentsTemplatesFormsSignup from "./forms/signup";
import * as ComponentsTemplatesFormsSignin from "./forms/signin";
import * as ComponentsMoleculesLandingpageeffect from "../molecules/landingpageeffect";
import styles from "./auth.module.scss";
import * as StorageAuth from "../../storage/auth";

export type Props = { type: string };
export type States = { tabFocused: boolean };
export type Children = { users?: React.ReactNode };
export type ExternalChildren = { fishCanvas: React.ReactNode };
let externalChildren: ExternalChildren | undefined = undefined;
export const setExternalChildren = (children?: ExternalChildren) => {
  externalChildren = children;
};

export const DefaultProps: Props = { type: "sign-in" };

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
  } = msi.storage.useStates<States>({ tabFocused: false });
  const setState = (states: States) => {
    if (setStateFn(states)) onStatesChange?.(states);
  };
  const globalStorage = msi.storage.useStorage(
    "global",
    StorageAuth.StorageInstant,
  );
  const storages = { global: globalStorage.state };
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
            <ComponentsMoleculesLandingpageeffect.Component
              className={` ${id} ${styles["E279"]}`}
              divProps={{}}
            />
            <div className={` ${id} ${styles["E280"]}`}>
              <div className={` ${id} ${styles["E281"]}`} />
              <div className={` ${id} ${styles["E282"]}`}>
                {externalChildren?.fishCanvas}
              </div>
            </div>
            <div className={` ${id} ${styles["E283"]}`}>
              <div className={` ${id} ${styles["E284"]}`}>
                <div className={` ${id} ${styles["E285"]}`}>
                  {children?.users !== undefined ? (
                    <div className={` ${id} ${styles["E1095"]}`}>
                      {children?.users}
                    </div>
                  ) : undefined}
                  <div
                    className={` ${id} ${styles["E1096"]}${states?.tabFocused === true ? ` ${styles["E1097"]}` : ""}`}
                  >
                    <div
                      tabIndex={0}
                      className={` ${id} ${styles["E1098"]}${properties?.type === "sign-in" ? ` ${styles["E1099"]}` : ""}`}
                      onBlur={(originalEvent) => {
                        const event =
                          msi.utils.prepareFocusEvent(originalEvent);
                        const states = getState();
                        states.tabFocused = false;
                        setState(states);
                      }}
                      onFocus={(originalEvent) => {
                        const event =
                          msi.utils.prepareFocusEvent(originalEvent);
                        const states = getState();
                        states.tabFocused = true;
                        setState(states);
                      }}
                      onClick={(originalEvent) => {
                        const event =
                          msi.utils.prepareMouseEvent(originalEvent);
                        router
                          .push("/sign-in", undefined, { scroll: false })
                          .then(() => {
                            document
                              .querySelector("#__next")
                              ?.scrollTo({ top: 0, left: 0 });
                          });
                      }}
                    >
                      <div className={` ${id} ${styles["E1100"]}`}>
                        <span className={` ${id} ${styles["E1101"]}`}>
                          {"Sign In"}
                        </span>
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      className={` ${id} ${styles["E1102"]}${properties?.type === "sign-up" ? ` ${styles["E1103"]}` : ""}`}
                      onBlur={(originalEvent) => {
                        const event =
                          msi.utils.prepareFocusEvent(originalEvent);
                        const states = getState();
                        states.tabFocused = false;
                        setState(states);
                      }}
                      onFocus={(originalEvent) => {
                        const event =
                          msi.utils.prepareFocusEvent(originalEvent);
                        const states = getState();
                        states.tabFocused = true;
                        setState(states);
                      }}
                      onClick={(originalEvent) => {
                        const event =
                          msi.utils.prepareMouseEvent(originalEvent);
                        router
                          .push("sign-up", undefined, { scroll: false })
                          .then(() => {
                            document
                              .querySelector("#__next")
                              ?.scrollTo({ top: 0, left: 0 });
                          });
                      }}
                    >
                      <div className={` ${id} ${styles["E1104"]}`}>
                        <span className={` ${id} ${styles["E1105"]}`}>
                          {"Sign Up"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={` ${id} ${styles["E286"]}`}>
                    <div className={` ${id} ${styles["E1106"]}`}>
                      <div
                        tabIndex={0}
                        className={` ${id} ${styles["E1107"]}`}
                        onClick={(originalEvent) => {
                          const event =
                            msi.utils.prepareMouseEvent(originalEvent);
                          const storages = { global: globalStorage.get() };
                          storages.global.sign_in.type = "google";
                          globalStorage.set(storages.global);
                        }}
                      >
                        <div className={` ${id} ${styles["E1108"]}`}>
                          <span className={` ${id} ${styles["E1109"]}`}>
                            {"Google"}
                          </span>
                        </div>
                        <div className={` ${id} ${styles["E1110"]}`} />
                      </div>
                      <div
                        tabIndex={0}
                        className={` ${id} ${styles["E1111"]}`}
                        onClick={(originalEvent) => {
                          const event =
                            msi.utils.prepareMouseEvent(originalEvent);
                          const storages = { global: globalStorage.get() };
                          storages.global.sign_in.type = "github";
                          globalStorage.set(storages.global);
                        }}
                      >
                        <div className={` ${id} ${styles["E1112"]}`}>
                          <span className={` ${id} ${styles["E1113"]}`}>
                            {"Github"}
                          </span>
                        </div>
                        <div className={` ${id} ${styles["E1114"]}`} />
                      </div>
                    </div>
                    <div className={` ${id} ${styles["E1115"]}`} />
                    {properties?.type === "sign-in" ? (
                      <ComponentsTemplatesFormsSignin.Component
                        className={` ${id} ${styles["E289"]}`}
                        divProps={{}}
                      />
                    ) : undefined}
                    {properties?.type === "sign-up" ? (
                      <ComponentsTemplatesFormsSignup.Component
                        className={` ${id} ${styles["E1116"]}`}
                        divProps={{}}
                      />
                    ) : undefined}
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
