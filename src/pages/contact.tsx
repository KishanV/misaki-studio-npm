"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../settings/environment";
import { SVGs } from "../design-system/images";
import * as ComponentsAtomsButton from "../components/atoms/button";
import * as ComponentsMoleculesAnimatedheader from "../components/molecules/animatedheader";
import * as ComponentsAtomsBullet from "../components/atoms/bullet";
import * as ComponentsMoleculesFooter from "../components/molecules/footer";
import * as ComponentsMoleculesPagehero from "../components/molecules/pagehero";
import styles from "./contact.module.scss";

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
      className={`${className}  ${id} ${styles["E699"]}`}
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
              className={` ${id} ${styles["E700"]}`}
              divProps={{}}
              properties={{ activeLink: "contact" }}
            />
            <ComponentsMoleculesPagehero.Component
              className={` ${id} ${styles["E701"]}`}
              divProps={{}}
              properties={{
                title: "Contact Us",
                description: "",
                tag: undefined,
              }}
            />
            <div className={` ${id} ${styles["E702"]}`}>
              <div className={` ${id} ${styles["E703"]}`}>
                <div className={` ${id} ${styles["E704"]}`}>
                  <span className={` ${id} ${styles["E705"]}`}>
                    {"You can reach us for support on Discord right now!\n"}
                  </span>
                </div>
                <div className={` ${id} ${styles["E706"]}`}>
                  <span className={` ${id} ${styles["E707"]}`}>
                    {
                      "Currently, we are selecting Discord server as our primary communication an support center. we think this will be best way to connect our team to user and user to team. because, it is real time communication tool.\n"
                    }
                  </span>
                </div>
                <div className={` ${id} ${styles["E708"]}`}>
                  <span className={` ${id} ${styles["E709"]}`}>
                    {"What we actually doing on Discord?\n"}
                  </span>
                </div>
                <div className={` ${id} ${styles["E710"]}`}>
                  <ComponentsAtomsBullet.Component
                    className={` ${id} ${styles["E711"]}`}
                    divProps={{}}
                    properties={{
                      text: "Most important is that we can chat in real time with user on troubleshooting issue with user, directly.",
                    }}
                    variant={["big"]}
                  />
                  <ComponentsAtomsBullet.Component
                    className={` ${id} ${styles["E712"]}`}
                    divProps={{}}
                    properties={{
                      text: "Community building so users can help and guid each others.",
                    }}
                    variant={["big"]}
                  />
                  <ComponentsAtomsBullet.Component
                    className={` ${id} ${styles["E713"]}`}
                    divProps={{}}
                    properties={{ text: "Announcing updates and hot patches." }}
                    variant={["big"]}
                  />
                  <ComponentsAtomsBullet.Component
                    className={` ${id} ${styles["E714"]}`}
                    divProps={{}}
                    properties={{ text: "More.." }}
                    variant={["big"]}
                  />
                </div>
                <ComponentsAtomsButton.Component
                  className={` ${id} ${styles["E715"]}`}
                  divProps={{
                    onClick: (originalEvent) => {
                      const event = msi.utils.prepareMouseEvent(originalEvent);
                      router
                        .push("https://discord.gg/DxVBjjy5Gh", undefined, {
                          scroll: false,
                        })
                        .then(() => {
                          document
                            .querySelector("#__next")
                            ?.scrollTo({ top: 0, left: 0 });
                        });
                    },
                  }}
                  properties={{ lable: "Join us on Discord" }}
                  children={{
                    left: (
                      <>
                        <div className={` ${id} ${styles["E716"]}`} />
                      </>
                    ),
                  }}
                />
              </div>
            </div>
            <ComponentsMoleculesFooter.Component
              className={` ${id} ${styles["E717"]}`}
              divProps={{}}
            />
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
