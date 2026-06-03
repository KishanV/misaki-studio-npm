"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../settings/environment";
import { SVGs } from "../design-system/images";
import * as CmsDataDemo from "../cms/data/demo";
import styles from "./cms.module.scss";

export type States = {};

export default ({
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
  } = msi.storage.useStates<States>({});
  const setState = (states: States) => {
    if (setStateFn(states)) onStatesChange?.(states);
  };
  const contents = { ok: CmsDataDemo.test };
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E812"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      {msi.utils.loopOnArray(contents.ok, (item, index, isLastStep) => {
        const output = { item, step: index, isLastStep };
        const level_2 = { repeater: { output } };
        return (
          <>
            <div className={` ${id} ${styles["E813"]}`}>
              <div className={` ${id} ${styles["E814"]}`}>
                <span className={` ${id} ${styles["E815"]}`}>
                  {msi.utils.toText(level_2?.repeater?.output?.item?.id) ??
                    "No"}
                </span>
                <span className={` ${id} ${styles["E816"]}`}>{"."}</span>
              </div>
              <div className={` ${id} ${styles["E817"]}`}>
                <span className={` ${id} ${styles["E818"]}`}>
                  {msi.utils.toText(level_2?.repeater?.output?.item?.name) ??
                    "Name"}
                </span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
