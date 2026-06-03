"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../../settings/environment";
import { SVGs } from "../../../design-system/images";
import * as ComponentsAtomsFormfield from "../../atoms/formfield";
import styles from "./resetpassword.module.scss";
import * as StorageAuth from "../../../storage/auth";

export type States = {
  password: { value: string; isValid: boolean };
  touched: boolean;
  repeatPassword: { value: string; isValid: boolean };
};
type ValidatorValues = {
  fields: boolean;
  repeatPassword: { isValid: boolean | undefined; error?: string | undefined };
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
    password: { value: "", isValid: true },
    touched: false,
    repeatPassword: { value: "", isValid: true },
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
    fields:
      states?.password?.isValid === true &&
      states?.repeatPassword?.isValid === true
        ? true
        : false,
    repeatPassword:
      states?.password?.value !== states?.repeatPassword?.value
        ? { isValid: false, error: "Password does not match." }
        : true
          ? { isValid: true, error: undefined }
          : ({ isValid: false } as ValidatorValues["repeatPassword"]),
  };
  const validator = {
    values: validatorValues,
    isAllValid:
      [validatorValues.fields, validatorValues.repeatPassword]
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
        className={` ${id} ${styles["E71"]}`}
        divProps={{}}
        onStatesChange={(componentState) => {
          const states = getState();
          states.password.value = componentState?.value;
          states.password.isValid = componentState?.isValid;
          setState(states);
        }}
        properties={{
          title: "New Password",
          formula: undefined,
          formulaError: undefined,
          optional: false,
          optionalError: "Password can not be empty.",
          canShowError: states?.touched,
          extraError: undefined,
        }}
      />
      <ComponentsAtomsFormfield.Component
        className={` ${id} ${styles["E72"]}`}
        divProps={{}}
        onStatesChange={(componentState) => {
          const states = getState();
          states.repeatPassword.value = componentState?.value;
          states.repeatPassword.isValid = componentState?.isValid;
          setState(states);
        }}
        properties={{
          title: "Repeat Password",
          formula: undefined,
          formulaError: undefined,
          optional: false,
          optionalError: "Password can not be empty.",
          canShowError: states?.touched,
          extraError: validator?.values?.repeatPassword?.error,
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
            storages.global.resetPassword.password = states?.password?.value;
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
