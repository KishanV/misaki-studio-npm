"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import * as ComponentsMoleculesFeaturestab from "./featurestab";
import * as ComponentsMoleculesFeatureinfoCanvas from "./featureinfo/canvas";
import styles from "./features.module.scss";

export type States = { selectedComponent: any };

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
    selectedComponent: <ComponentsMoleculesFeatureinfoCanvas.Component />,
  });
  const setState = (states: States) => {
    if (setStateFn(states)) onStatesChange?.(states);
  };
  msi.utils.useDidUpdateEffect({
    values: [states?.selectedComponent],
    option: {
      debounce: false,
      delay: 100,
      runOnInit: false,
    },
    on: () => {
      msi.utils.scrollTo({
        target: `.${id}.${styles["E1184"]}`,
        config: msi.utils.ScrollElementConfig.TOP,
        operator: msi.utils.ScrollElementOrator.PLUS,
        value: 34,
      });
    },
  });
  return (
    <msi.resizeDetecter.ResponsiveDiv
      sizes={[
        { width: 1200, className: ["w1200px"] },
        { width: 700, className: ["w700px"] },
        { width: 400, className: ["w400px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E1184"]}`}
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
            <ComponentsMoleculesFeaturestab.Component
              className={` ${id} ${styles["E1185"]}`}
              divProps={{}}
              events={{
                select: (event) => {
                  const states = getState();
                  states.selectedComponent = event?.component;
                  setState(states);
                },
              }}
            />
            <div className={` ${id} ${styles["E1186"]}`}>
              {states?.selectedComponent}
            </div>
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
