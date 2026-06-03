"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import styles from "./projectwrapper.module.scss";

export type Props = {
  enable?: {
    github?: boolean;
    clone?: boolean;
    menu?: boolean;
    home?: boolean;
    signIn?: boolean;
  };
  menuOpen?: boolean;
  loading?: { module: string; file: string };
};
export type States = { menuOpen?: boolean };
export type Events = {
  github?: () => void;
  clone?: () => void;
  preview?: () => void;
  home?: () => void;
  signIn?: () => void;
};
export type Children = { project?: React.ReactNode };

export const DefaultProps: Props = {
  enable: { github: true, clone: true, menu: true, home: true, signIn: true },
  menuOpen: false,
  loading: { module: "Loading module(0/10)", file: "compnentes(2/30)" },
};

export const Component = ({
  className = "",
  style,
  divProps,
  properties = DefaultProps,
  onStatesChange,
  events,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  properties?: Props;
  onStatesChange?: (states: States) => void;
  events?: Events;
  children?: Children;
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  const {
    state: states,
    getState,
    setState: setStateFn,
  } = msi.storage.useStates<States>({ menuOpen: false });
  const setState = (states: States) => {
    if (setStateFn(states)) onStatesChange?.(states);
  };
  msi.utils.useDidUpdateEffect({
    values: [properties?.menuOpen],
    option: {
      debounce: false,
      delay: 10,
      runOnInit: true,
    },
    on: () => {
      if (properties?.menuOpen !== states?.menuOpen) {
        const states = getState();
        states.menuOpen = properties?.menuOpen;
        setState(states);
      }
    },
  });
  return (
    <msi.resizeDetecter.ResponsiveDiv
      sizes={[
        { width: 900, className: ["w900px"] },
        { width: 700, className: ["w700px"] },
        { width: 400, className: ["w400px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E1191"]}`}
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
            <div className={` ${id} ${styles["E1192"]}`}>
              <div className={` ${id} ${styles["E1193"]}`}>
                {properties?.enable?.home !== false ? (
                  <div
                    className={` ${id} ${styles["E1194"]}`}
                    onClick={(originalEvent) => {
                      const event = msi.utils.prepareMouseEvent(originalEvent);
                      events?.home?.();
                    }}
                  >
                    <div className={` ${id} ${styles["E1195"]}`} />
                    <div className={` ${id} ${styles["E1196"]}`}>
                      <span className={` ${id} ${styles["E1197"]}`}>
                        {"Home"}
                      </span>
                    </div>
                  </div>
                ) : undefined}
                {screen !== "w400px" ? (
                  <>
                    {properties?.enable?.menu !== false ? (
                      <div
                        className={` ${id} ${styles["E1198"]}`}
                        onClick={(originalEvent) => {
                          const event =
                            msi.utils.prepareMouseEvent(originalEvent);
                          const states = getState();
                          states.menuOpen = true;
                          setState(states);
                        }}
                      >
                        <div className={` ${id} ${styles["E1199"]}`} />
                        <div className={` ${id} ${styles["E1200"]}`}>
                          <span className={` ${id} ${styles["E1201"]}`}>
                            {"Menu"}
                          </span>
                        </div>
                      </div>
                    ) : undefined}
                  </>
                ) : undefined}
                {screen !== "w400px" ? (
                  <>
                    <div className={` ${id} ${styles["E1202"]}`}>
                      <div className={` ${id} ${styles["E1203"]}`}>
                        <span className={` ${id} ${styles["E1204"]}`}>
                          {"Interactive & Readonly Playground"}
                        </span>
                      </div>
                      <div className={` ${id} ${styles["E1205"]}`} />
                    </div>
                  </>
                ) : undefined}
              </div>
              <div className={` ${id} ${styles["E1206"]}`}>
                {screen !== "w400px" ? (
                  <>
                    <div
                      className={` ${id} ${styles["E1207"]}`}
                      onClick={(originalEvent) => {
                        const event =
                          msi.utils.prepareMouseEvent(originalEvent);
                        events?.preview?.();
                      }}
                    >
                      <div className={` ${id} ${styles["E1208"]}`} />
                      <div className={` ${id} ${styles["E1209"]}`}>
                        <span className={` ${id} ${styles["E1210"]}`}>
                          {"Preview"}
                        </span>
                      </div>
                    </div>
                  </>
                ) : undefined}
                {screen !== "w400px" ? (
                  <>
                    {properties?.enable?.github !== false ? (
                      <div
                        className={` ${id} ${styles["E1211"]}`}
                        onClick={(originalEvent) => {
                          const event =
                            msi.utils.prepareMouseEvent(originalEvent);
                          events?.github?.();
                        }}
                      >
                        <div className={` ${id} ${styles["E1212"]}`} />
                        <div className={` ${id} ${styles["E1213"]}`}>
                          <span className={` ${id} ${styles["E1214"]}`}>
                            {"Github"}
                          </span>
                        </div>
                      </div>
                    ) : undefined}
                  </>
                ) : undefined}
                {screen !== "w400px" ? (
                  <>
                    {properties?.enable?.clone !== false ? (
                      <div
                        className={` ${id} ${styles["E1215"]}`}
                        onClick={(originalEvent) => {
                          const event =
                            msi.utils.prepareMouseEvent(originalEvent);
                          events?.clone?.();
                        }}
                      >
                        <div className={` ${id} ${styles["E1216"]}`} />
                        <div className={` ${id} ${styles["E1217"]}`}>
                          <span className={` ${id} ${styles["E1218"]}`}>
                            {"Clone"}
                          </span>
                        </div>
                      </div>
                    ) : undefined}
                  </>
                ) : undefined}
                {screen !== "w400px" ? (
                  <>
                    {properties?.enable?.signIn !== false ? (
                      <div
                        className={` ${id} ${styles["E1219"]}`}
                        onClick={(originalEvent) => {
                          const event =
                            msi.utils.prepareMouseEvent(originalEvent);
                          events?.signIn?.();
                        }}
                      >
                        <div className={` ${id} ${styles["E1220"]}`} />
                        <div className={` ${id} ${styles["E1221"]}`}>
                          <span className={` ${id} ${styles["E1222"]}`}>
                            {"Sign In"}
                          </span>
                        </div>
                      </div>
                    ) : undefined}
                  </>
                ) : undefined}
              </div>
            </div>
            <div className={` ${id} ${styles["E1223"]}`}>
              {screen !== "w400px" ? (
                <>
                  <div className={` ${id} ${styles["E1224"]}`}>
                    {properties?.loading !== undefined ? (
                      <div className={` ${id} ${styles["E1225"]}`}>
                        <div className={` ${id} ${styles["E1226"]}`}>
                          <span className={` ${id} ${styles["E1227"]}`}>
                            {msi.utils.toText(properties?.loading?.module) ??
                              "Loading Module(0/10)"}
                          </span>
                        </div>
                        <div className={` ${id} ${styles["E1228"]}`}>
                          <span className={` ${id} ${styles["E1229"]}`}>
                            {msi.utils.toText(properties?.loading?.file) ??
                              "Components(4/20)"}
                          </span>
                        </div>
                      </div>
                    ) : undefined}
                    {children?.project}
                  </div>
                </>
              ) : undefined}
            </div>
            <div
              className={` ${id} ${styles["E1230"]}${states?.menuOpen === true ? ` ${styles["E1231"]}` : ""}`}
            />
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
