"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import * as ComponentsTemplatesFormsSignin from "./forms/signin";
import * as ComponentsTemplatesFormsResetpassword from "./forms/resetpassword";
import * as ComponentsMoleculesLandingpageeffect from "../molecules/landingpageeffect";
import styles from "./resetpassword.module.scss";
import * as StorageAuth from "../../storage/auth";

export type States = { tabFocused: boolean };
export type ExternalChildren = { fishCanvas: React.ReactNode };
let externalChildren: ExternalChildren | undefined = undefined;
export const setExternalChildren = (children?: ExternalChildren) => {
  externalChildren = children;
};

export const Component = ({
  className = "",
  style,
  divProps,
  onStatesChange,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  onStatesChange?: (states: States) => void;
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
                  <div className={` ${id} ${styles["E286"]}`}>
                    <div className={` ${id} ${styles["E287"]}`}>
                      <span className={` ${id} ${styles["E288"]}`}>
                        {"Reset Password"}
                      </span>
                    </div>
                    <ComponentsTemplatesFormsResetpassword.Component
                      className={` ${id} ${styles["E289"]}`}
                      divProps={{}}
                    />
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
