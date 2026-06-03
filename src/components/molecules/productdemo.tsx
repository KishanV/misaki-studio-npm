"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import * as ComponentsMoleculesProductdemoitem from "./productdemoitem";
import styles from "./productdemo.module.scss";

export type Props = { showOnlySelected: boolean };
export type States = {
  selected: number;
  list: { title: string; description: string; image: any }[];
  isTouched: boolean;
};

export const DefaultProps: Props = { showOnlySelected: false };

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
    selected: 0,
    list: [
      {
        title: "Drawing & Animation",
        description:
          "A simple infinite canvas for drawing, with transitions and a timeline for animations.",
        image: "var(--svgs-types-screenshot-component)",
      },
      {
        title: "Design System",
        description:
          "Fully dedicated design system for scalability and accuracy in UI development.",
        image: "var(--svgs-types-screenshot-designSystem)",
      },
      {
        title: "Logic",
        description:
          "A visual programming environment with dynamic conditions, setters, getters, and reactive blocks.",
        image: "var(--svgs-types-screenshot-logic)",
      },
      {
        title: "Export Code",
        description:
          "Misaki Studio lets you convert your designs into 100% working code in TypeScript, React, and CSS.",
        image: "var(--svgs-types-screenshot-exportCode)",
      },
    ],
    isTouched: false,
  });
  const setState = (states: States) => {
    if (setStateFn(states)) onStatesChange?.(states);
  };
  return (
    <msi.resizeDetecter.ResponsiveDiv
      sizes={[
        { width: 900, className: ["w900px"] },
        { width: 750, className: ["w750px"] },
        { width: 350, className: ["w350px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E766"]}`}
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
            <div className={` ${id} ${styles["E767"]}`}>
              <div className={` ${id} ${styles["E768"]}`}>
                {msi.utils.loopOnArray(
                  states.list,
                  (item, index, isLastStep) => {
                    const output = { item, step: index, isLastStep };
                    const level_4 = { repeater: { output } };
                    return (
                      <>
                        {(properties?.showOnlySelected === true &&
                          level_4?.repeater?.output?.step ===
                            states?.selected) ||
                        properties?.showOnlySelected === false ? (
                          <ComponentsMoleculesProductdemoitem.Component
                            className={` ${id} ${styles["E769"]}`}
                            divProps={{
                              onClick: (originalEvent) => {
                                const event =
                                  msi.utils.prepareMouseEvent(originalEvent);
                                const states = getState();
                                states.selected =
                                  level_4?.repeater?.output?.step;
                                states.isTouched = true;
                                setState(states);
                              },
                            }}
                            properties={
                              states?.selected ===
                              level_4?.repeater?.output?.step
                                ? {
                                    title:
                                      level_4?.repeater?.output?.item?.title,
                                    description:
                                      level_4?.repeater?.output?.item
                                        ?.description,
                                    autoplay: true,
                                  }
                                : true
                                  ? {
                                      title:
                                        level_4?.repeater?.output?.item?.title,
                                      description:
                                        level_4?.repeater?.output?.item
                                          ?.description,
                                      autoplay: false,
                                    }
                                  : ComponentsMoleculesProductdemoitem.DefaultProps
                            }
                            events={{
                              animaitonComplete: () => {
                                if (
                                  level_4?.repeater?.output?.isLastStep === true
                                ) {
                                  const states = getState();
                                  states.selected = 0;
                                  states.isTouched = true;
                                  setState(states);
                                } else {
                                  const states = getState();
                                  states.selected += 1;
                                  states.isTouched = true;
                                  setState(states);
                                }
                              },
                            }}
                            variant={
                              states?.selected ===
                              level_4?.repeater?.output?.step
                                ? ["highlight"]
                                : true
                                  ? []
                                  : []
                            }
                          />
                        ) : undefined}
                      </>
                    );
                  },
                )}
              </div>
              <div className={` ${id} ${styles["E770"]}`}>
                {msi.utils.loopOnArray(
                  states.list,
                  (item, index, isLastStep) => {
                    const output = { item, step: index, isLastStep };
                    const level_4 = {
                      repeater: { output },
                      render: { state: "" },
                    };
                    return (
                      <>
                        <msi.popup.Render
                          enter={150}
                          exit={500}
                          isVisible={
                            level_4?.repeater?.output?.step === states?.selected
                          }
                          children={(state) => {
                            level_4.render.state = state;
                            return (
                              <div
                                className={` ${id} ${styles["E771"]}${level_4?.render?.state === "enter" && states?.isTouched === true ? ` ${styles["E772"]}` : level_4?.render?.state === "exit" && states?.isTouched === true ? ` ${styles["E773"]}` : ""}`}
                                style={msi.utils.toStyle({
                                  image: level_4?.repeater?.output?.item?.image,
                                })}
                              />
                            );
                          }}
                        />
                      </>
                    );
                  },
                )}
              </div>
            </div>
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
