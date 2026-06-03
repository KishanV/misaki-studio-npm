"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import styles from "./formfield.module.scss";

export type Props = {
  title: string;
  formula?: RegExp;
  formulaError?: string;
  optional: boolean;
  optionalError?: string;
  canShowError: boolean;
  extraError?: string;
};
export type States = {
  value: string;
  isValid: boolean;
  formulaError: string;
  optionalError: string;
  focused: boolean;
};

export const DefaultProps: Props = {
  title: "Title",
  formula: undefined,
  formulaError: undefined,
  optional: false,
  optionalError: undefined,
  canShowError: true,
  extraError: undefined,
};
type ValidatorValues = {
  field: { isValid: boolean | undefined; error?: string | undefined };
};

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
  } = msi.storage.useStates<States>({
    value: "",
    isValid: true,
    formulaError: "invalid value.",
    optionalError: "field can not be empty.",
    focused: false,
  });
  const setState = (states: States) => {
    if (setStateFn(states)) onStatesChange?.(states);
  };
  const validatorValues: ValidatorValues = {
    field:
      properties?.optional === false && states?.value === ""
        ? { isValid: false, error: states?.optionalError }
        : new RegExp("^s*$").test(states?.value)
          ? { isValid: false, error: states?.optionalError }
          : properties?.formula !== undefined &&
              !(properties?.formula).test(states?.value)
            ? { isValid: false, error: states?.formulaError }
            : true
              ? { isValid: true, error: properties?.extraError }
              : ({ isValid: false } as ValidatorValues["field"]),
  };
  const validator = {
    values: validatorValues,
    isAllValid:
      [validatorValues.field]
        .map((item) =>
          typeof item === "boolean" ? item : (item as any)?.isValid,
        )
        .includes(false) === false,
  };
  msi.utils.useDidUpdateEffect({
    values: [properties?.formulaError],
    option: {
      debounce: false,
      delay: 10,
      runOnInit: true,
    },
    on: () => {
      if (properties?.formulaError !== undefined) {
        const states = getState();
        states.formulaError = properties?.formulaError;
        setState(states);
      } else {
        const states = getState();
        states.formulaError = "invalid value.";
        setState(states);
      }
    },
  });
  msi.utils.useDidUpdateEffect({
    values: [properties?.optionalError],
    option: {
      debounce: false,
      delay: 10,
      runOnInit: true,
    },
    on: () => {
      if (properties?.optionalError !== undefined) {
        const states = getState();
        states.optionalError = properties?.optionalError;
        setState(states);
      } else {
        const states = getState();
        states.optionalError = "field can not be empty.";
        setState(states);
      }
    },
  });
  msi.utils.useDidUpdateEffect({
    values: [validator?.isAllValid],
    option: {
      debounce: false,
      delay: 10,
      runOnInit: true,
    },
    on: () => {
      const states = getState();
      states.isValid = validator?.isAllValid;
      setState(states);
    },
  });
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E2"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <div
        className={` ${id} ${styles["E3"]}${states?.focused === true ? ` ${styles["E4"]}` : ""}`}
      >
        <div className={` ${id} ${styles["E5"]}`}>
          <span className={` ${id} ${styles["E6"]}`}>
            {msi.utils.toText(properties?.title) ?? "Email"}
          </span>
        </div>
        {(properties?.canShowError === true && states?.isValid !== true) ||
        (properties?.canShowError === true &&
          properties?.extraError !== undefined) ? (
          <div className={` ${id} ${styles["E7"]}`}>
            <span className={` ${id} ${styles["E8"]}`}>
              {msi.utils.toText(validator?.values?.field?.error) ?? "error."}
            </span>
          </div>
        ) : undefined}
        <input
          className={` ${id} ${styles["E9"]}`}
          onChange={(originalEvent) => {
            const event = msi.utils.prepareInputChangeEvent(originalEvent);
            const states = getState();
            states.value = event?.text;
            setState(states);
          }}
          onBlur={(originalEvent) => {
            const event = msi.utils.prepareFocusEvent(originalEvent);
            const states = getState();
            states.focused = false;
            setState(states);
          }}
          onFocus={(originalEvent) => {
            const event = msi.utils.prepareFocusEvent(originalEvent);
            const states = getState();
            states.focused = true;
            setState(states);
          }}
          value={msi.utils.toText(states?.value) ?? ""}
        />
      </div>
    </div>
  );
};
