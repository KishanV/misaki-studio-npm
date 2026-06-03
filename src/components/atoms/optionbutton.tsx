"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import styles from "./optionbutton.module.scss";

export type Props = { list: string[]; selected: number };
export type States = { selected: number };

export const DefaultProps: Props = { list: ["One", "Two"], selected: 0 };

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
  } = msi.storage.useStates<States>({ selected: 0 });
  const setState = (states: States) => {
    if (setStateFn(states)) onStatesChange?.(states);
  };
  msi.utils.useDidUpdateEffect({
    values: [properties?.selected],
    option: {
      debounce: false,
      delay: 10,
      runOnInit: true,
    },
    on: () => {
      const states = getState();
      states.selected = properties?.selected;
      setState(states);
    },
  });
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E33"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      {msi.utils.loopOnArray(properties.list, (item, index, isLastStep) => {
        const output = { item, step: index, isLastStep };
        const level_2 = { repeater: { output } };
        return (
          <>
            <div
              className={` ${id} ${styles["E34"]}${level_2?.repeater?.output?.step === states?.selected ? ` ${styles["E35"]}` : ""}`}
              onClick={(originalEvent) => {
                const event = msi.utils.prepareMouseEvent(originalEvent);
                const states = getState();
                states.selected = level_2?.repeater?.output?.step;
                setState(states);
              }}
            >
              <span className={` ${id} ${styles["E36"]}`}>
                {msi.utils.toText(
                  properties?.list[level_2?.repeater?.output?.step],
                ) ?? "Sample"}
              </span>
            </div>
          </>
        );
      })}
    </div>
  );
};
