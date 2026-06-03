"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import * as ComponentsMoleculesFooter from "../../components/molecules/footer";
import * as ComponentsMoleculesPagehero from "../../components/molecules/pagehero";
import * as ComponentsMoleculesAnimatedheader from "../../components/molecules/animatedheader";
import * as DocumentsMisaki from "../../documents/misaki";
import styles from "./introduction.module.scss";

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
      className={`${className}  ${id} ${styles["E19"]}`}
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
              className={` ${id} ${styles["E20"]}`}
              divProps={{}}
              properties={{ activeLink: "blog" }}
            />
            <ComponentsMoleculesPagehero.Component
              className={` ${id} ${styles["E21"]}`}
              divProps={{}}
              properties={{
                title: "The Misaki Studio",
                description:
                  "A full blown editor to create user interface and website.",
                tag: "Blog",
              }}
            />
            <div className={` ${id} ${styles["E22"]}`}>
              <div className={` ${id} ${styles["E23"]}`}>
                <DocumentsMisaki.Component />
              </div>
            </div>
            <ComponentsMoleculesFooter.Component
              className={` ${id} ${styles["E24"]}`}
              divProps={{}}
            />
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
