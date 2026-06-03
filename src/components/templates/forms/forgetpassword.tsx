"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../../settings/environment";
import { SVGs } from "../../../design-system/images";
import * as ComponentsAtomsFormfield from "../../atoms/formfield";
import styles from "./forgetpassword.module.scss";
import * as StorageAuth from "../../../storage/auth";

export type States = {
  email: { value: string; isValid: boolean };
  touched: boolean;
};
type ValidatorValues = { fields: boolean };

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
    email: { value: "", isValid: true },
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
  const validatorValues: ValidatorValues = {
    fields: states?.email?.isValid === true ? true : false,
  };
  const validator = {
    values: validatorValues,
    isAllValid:
      [validatorValues.fields]
        .map((item) =>
          typeof item === "boolean" ? item : (item as any)?.isValid,
        )
        .includes(false) === false,
  };
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
        className={` ${id} ${styles["E1466"]}`}
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
      <div
        tabIndex={0}
        className={` ${id} ${styles["E73"]}`}
        onClick={(originalEvent) => {
          const event = msi.utils.prepareMouseEvent(originalEvent);
          if (validator?.isAllValid === true) {
            const states = getState();
            const storages = { global: globalStorage.get() };
            states.touched = true;
            storages.global.forgetPassword.email = states?.email?.value;
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
