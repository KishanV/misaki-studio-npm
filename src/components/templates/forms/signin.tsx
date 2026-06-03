"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../../settings/environment";
import { SVGs } from "../../../design-system/images";
import * as ComponentsAtomsFormfield from "../../atoms/formfield";
import styles from "./signin.module.scss";
import * as StorageAuth from "../../../storage/auth";

export type States = {
  email: { value: string; isValid: boolean };
  password: { value: string; isValid: boolean };
  touched: boolean;
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
  } = msi.storage.useStates<States>({
    email: { value: "", isValid: false },
    password: { value: "", isValid: true },
    touched: false,
  });
  const setState = (states: States) => {
    if (setStateFn(states)) onStatesChange?.(states);
  };
  const globalStorage = msi.storage.useStorage(
    "global",
    StorageAuth.StorageInstant,
  );
  const storages = { global: globalStorage.state };
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E70"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <ComponentsAtomsFormfield.Component
        className={` ${id} ${styles["E786"]}`}
        divProps={{}}
        onStatesChange={(componentState) => {
          const states = getState();
          states.email.value = componentState?.value;
          states.email.isValid = componentState?.isValid;
          setState(states);
        }}
        properties={{
          title: "Email",
          formula: new RegExp(
            "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
          ),
          formulaError: "Invalid email.",
          optional: false,
          optionalError: "Email can not be empty.",
          canShowError: states?.touched,
          extraError: undefined,
        }}
      />
      <ComponentsAtomsFormfield.Component
        className={` ${id} ${styles["E71"]}`}
        divProps={{}}
        onStatesChange={(componentState) => {
          const states = getState();
          states.password.value = componentState?.value;
          states.password.isValid = componentState?.isValid;
          setState(states);
        }}
        properties={{
          title: "Password",
          formula: undefined,
          formulaError: undefined,
          optional: false,
          optionalError: "Password can not be empty.",
          canShowError: states?.touched,
          extraError: undefined,
        }}
      />
      <div
        tabIndex={0}
        className={` ${id} ${styles["E73"]}`}
        onClick={(originalEvent) => {
          const event = msi.utils.prepareMouseEvent(originalEvent);
          if (
            states?.email?.isValid === true &&
            states?.password?.isValid === true
          ) {
            const states = getState();
            const storages = { global: globalStorage.get() };
            states.touched = true;
            storages.global.sign_in.email = states?.email?.value;
            storages.global.sign_in.password = states?.password?.value;
            setState(states);
            globalStorage.set(storages.global);
          } else {
            const states = getState();
            states.touched = true;
            setState(states);
          }
        }}
      >
        <div className={` ${id} ${styles["E74"]}`}>
          <span className={` ${id} ${styles["E75"]}`}>{"Submit"}</span>
        </div>
      </div>
    </div>
  );
};
