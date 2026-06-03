"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import * as ComponentsMoleculesFeaturestabitem from "./featurestabitem";
import * as ComponentsMoleculesFeatureinfoCanvas from "./featureinfo/canvas";
import * as ComponentsMoleculesFeatureinfoDesign from "./featureinfo/design";
import * as ComponentsMoleculesFeatureinfoWebpages from "./featureinfo/webpages";
import * as ComponentsMoleculesFeatureinfoComponents from "./featureinfo/components";
import * as ComponentsMoleculesFeatureinfoCms from "./featureinfo/cms";
import styles from "./featurestab.module.scss";

export type States = {
  list: { title: string; description: string; icon: any; component: any }[];
  selected: number;
};
export type Events = { select?: (param: { component: any }) => void };

export const Component = ({
  className = "",
  style,
  divProps,
  onStatesChange,
  events,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  onStatesChange?: (states: States) => void;
  events?: Events;
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  const {
    state: states,
    getState,
    setState: setStateFn,
  } = msi.storage.useStates<States>({
    list: [
      {
        title: "Canvas",
        description: "Fully Featured Canvas Like Figma",
        icon: "var(--svgs-types-featuresIocns-canvas)",
        component: <ComponentsMoleculesFeatureinfoCanvas.Component />,
      },
      {
        title: "Design System",
        description: "For scalability",
        icon: "var(--svgs-types-featuresIocns-designSystem)",
        component: <ComponentsMoleculesFeatureinfoDesign.Component />,
      },
      {
        title: "Web Page",
        description: "A react js page with routing",
        icon: "var(--svgs-types-featuresIocns-webPages)",
        component: <ComponentsMoleculesFeatureinfoWebpages.Component />,
      },
      {
        title: "Components",
        description: "Reusability at its best",
        icon: "var(--svgs-types-featuresIocns-components)",
        component: <ComponentsMoleculesFeatureinfoComponents.Component />,
      },
      {
        title: "CMS",
        description: "Coming Soon...",
        icon: "var(--svgs-types-featuresIocns-cms)",
        component: <ComponentsMoleculesFeatureinfoCms.Component />,
      },
    ],
    selected: 0,
  });
  const setState = (states: States) => {
    if (setStateFn(states)) onStatesChange?.(states);
  };
  return (
    <msi.resizeDetecter.ResponsiveDiv
      sizes={[
        { width: 1000, className: ["w1000px"] },
        { width: 750, className: ["w750px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E1275"]}`}
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
            <div className={` ${id} ${styles["E1276"]}`}>
              <div className={` ${id} ${styles["E1277"]}`}>
                {msi.utils.loopOnArray(
                  states.list,
                  (item, index, isLastStep) => {
                    const output = { item, step: index, isLastStep };
                    const level_4 = { repeater: { output } };
                    return (
                      <>
                        <ComponentsMoleculesFeaturestabitem.Component
                          className={` ${id} ${styles["E1278"]}`}
                          divProps={{
                            onClick: (originalEvent) => {
                              const event =
                                msi.utils.prepareMouseEvent(originalEvent);
                              const states = getState();
                              states.selected = level_4?.repeater?.output?.step;
                              events?.select?.({
                                component:
                                  level_4?.repeater?.output?.item?.component,
                              });
                              setState(states);
                            },
                          }}
                          properties={{
                            title: level_4?.repeater?.output?.item?.title,
                            description:
                              level_4?.repeater?.output?.item?.description,
                            icon: level_4?.repeater?.output?.item?.icon,
                          }}
                          variant={
                            states?.selected === level_4?.repeater?.output?.step
                              ? ["highlight"]
                              : []
                          }
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
