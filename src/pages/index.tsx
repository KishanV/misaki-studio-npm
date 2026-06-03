"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../settings/environment";
import { SVGs } from "../design-system/images";
import * as ComponentsMoleculesFooter from "../components/molecules/footer";
import * as ComponentsMoleculesProductdemo from "../components/molecules/productdemo";
import * as ComponentsMoleculesHeader from "../components/molecules/header";
import * as ComponentsMoleculesAnimatedheader from "../components/molecules/animatedheader";
import * as ComponentsMoleculesTemplatesList from "../components/molecules/templates/list";
import * as ComponentsMoleculesFeatures from "../components/molecules/features";
import * as ComponentsMoleculesLandinghero from "../components/molecules/landinghero";
import styles from "./index.module.scss";

export type ExternalChildren = {
  fishCanvas: React.ReactNode;
  templates: React.ReactNode;
};
let externalChildren: ExternalChildren | undefined = undefined;
export const setExternalChildren = (children?: ExternalChildren) => {
  externalChildren = children;
};

export default ({
  className = "",
  style,
  divProps,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  return (
    <msi.resizeDetecter.ResponsiveDiv
      sizes={[
        { width: 1200, className: ["w1200px"] },
        { width: 700, className: ["w700px"] },
        { width: 400, className: ["w400px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E394"]}`}
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
            <ComponentsMoleculesAnimatedheader.Component
              className={` ${id} ${styles["E395"]}`}
              divProps={{}}
            />
            <div className={` ${id} ${styles["E396"]}`}>
              <div className={` ${id} ${styles["E397"]}`} />
              <div className={` ${id} ${styles["E398"]}`}>
                {externalChildren?.fishCanvas}
              </div>
            </div>
            <div className={` ${id} ${styles["E399"]}`}>
              <ComponentsMoleculesLandinghero.Component
                className={` ${id} ${styles["E400"]}`}
                divProps={{}}
              />
              {screen !== "w1200px" &&
              screen !== "w700px" &&
              screen !== "w400px" ? (
                <>
                  <div className={` ${id} ${styles["E401"]}`}>
                    <ComponentsMoleculesTemplatesList.Component
                      className={` ${id} ${styles["E402"]}`}
                      divProps={{}}
                      children={{
                        list: (
                          <>
                            <div className={` ${id} ${styles["E403"]}`}>
                              {externalChildren?.templates}
                            </div>
                          </>
                        ),
                      }}
                    />
                  </div>
                </>
              ) : undefined}
              <div className={` ${id} ${styles["E404"]}`}>
                {screen !== "w400px" ? (
                  <>
                    <ComponentsMoleculesProductdemo.Component
                      className={` ${id} ${styles["E405"]}`}
                      divProps={{}}
                    />
                  </>
                ) : undefined}
                {screen !== "w1200px" && screen !== "w700px" ? (
                  <>
                    <ComponentsMoleculesProductdemo.Component
                      className={` ${id} ${styles["E406"]}`}
                      divProps={{}}
                      properties={{ showOnlySelected: true }}
                    />
                  </>
                ) : undefined}
              </div>
              <div className={` ${id} ${styles["E407"]}`}>
                <div className={` ${id} ${styles["E408"]}`}>
                  <span className={` ${id} ${styles["E409"]}`}>
                    {"Features"}
                  </span>
                </div>
              </div>
              <div className={` ${id} ${styles["E410"]}`}>
                <ComponentsMoleculesFeatures.Component
                  className={` ${id} ${styles["E411"]}`}
                  divProps={{}}
                />
              </div>
            </div>
            <ComponentsMoleculesFooter.Component
              className={` ${id} ${styles["E412"]}`}
              divProps={{}}
            />
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
