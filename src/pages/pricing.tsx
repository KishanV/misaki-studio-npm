"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../settings/environment";
import { SVGs } from "../design-system/images";
import * as ComponentsAtomsMark from "../components/atoms/mark";
import * as ComponentsAtomsButton from "../components/atoms/button";
import * as ComponentsAtomsOptionbutton from "../components/atoms/optionbutton";
import * as ComponentsMoleculesPagehero from "../components/molecules/pagehero";
import * as ComponentsMoleculesAnimatedheader from "../components/molecules/animatedheader";
import * as ComponentsMoleculesFooter from "../components/molecules/footer";
import styles from "./pricing.module.scss";

export type States = { proPricing: string; maxPricing: string };

export const timelineData = (id: string): msi.timeline.Timelines => ({
  Untitled: {
    data: [],
    node: {
      name: "Untitled",
      seconds: 3,
      config: {
        type_: 4,
      },
      screen: 1,
    },
  },
});

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
  } = msi.storage.useStates<States>({ proPricing: "$7", maxPricing: "$11" });
  const setState = (states: States) => {
    if (setStateFn(states)) onStatesChange?.(states);
  };
  return (
    <msi.resizeDetecter.ResponsiveDiv
      sizes={[
        { width: 1200, className: ["w1200px"] },
        { width: 700, className: ["w700px"] },
        { width: 400, className: ["w400px"] },
      ]}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E445"]}`}
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
              className={` ${id} ${styles["E446"]}`}
              divProps={{}}
              properties={{ activeLink: "pricing" }}
            />
            <ComponentsMoleculesPagehero.Component
              className={` ${id} ${styles["E447"]}`}
              divProps={{}}
              properties={{
                title: "Our Pricing.",
                description: "",
                tag: "In Beta, Every thing is free.",
              }}
            />
            <div className={` ${id} ${styles["E448"]}`}>
              <ComponentsAtomsOptionbutton.Component
                className={` ${id} ${styles["E835"]}`}
                divProps={{}}
                onStatesChange={(componentState) => {
                  if (componentState?.selected === 0) {
                    const states = getState();
                    states.proPricing = "$10";
                    states.maxPricing = "$15";
                    setState(states);
                  } else {
                    const states = getState();
                    states.proPricing = "$7";
                    states.maxPricing = "$11";
                    setState(states);
                  }
                }}
                properties={{ list: ["Monthly", "Yearly"], selected: 1 }}
              />
              <div className={` ${id} ${styles["E836"]}`}>
                <div className={` ${id} ${styles["E837"]}`}>
                  <div className={` ${id} ${styles["E838"]}`}>
                    <div className={` ${id} ${styles["E839"]}`}>
                      <div className={` ${id} ${styles["E840"]}`}>
                        <span className={` ${id} ${styles["E841"]}`}>
                          {"Learn"}
                        </span>
                      </div>
                      <div className={` ${id} ${styles["E842"]}`}>
                        <div className={` ${id} ${styles["E843"]}`}>
                          <span className={` ${id} ${styles["E844"]}`}>
                            {"FREE"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={` ${id} ${styles["E845"]}`}>
                      <ComponentsAtomsButton.Component
                        className={` ${id} ${styles["E846"]}`}
                        divProps={{
                          onClick: (originalEvent) => {
                            const event =
                              msi.utils.prepareMouseEvent(originalEvent);
                            router
                              .push("/sign-in", undefined, { scroll: false })
                              .then(() => {
                                document
                                  .querySelector("#__next")
                                  ?.scrollTo({ top: 0, left: 0 });
                              });
                          },
                        }}
                        properties={{ lable: "Try for free" }}
                        variant={["sizeSmall"]}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E847"]}`}
                        divProps={{}}
                        properties={{
                          title: "Pull and push updates once per day.",
                        }}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E848"]}`}
                        divProps={{}}
                        properties={{ title: "Preview genrated code." }}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E849"]}`}
                        divProps={{}}
                        properties={{ title: "1 Project" }}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E850"]}`}
                        divProps={{}}
                        properties={{ title: "100mb max project size." }}
                      />
                    </div>
                  </div>
                </div>
                <div className={` ${id} ${styles["E851"]}`}>
                  <div className={` ${id} ${styles["E852"]}`}>
                    <div className={` ${id} ${styles["E853"]}`}>
                      <div className={` ${id} ${styles["E854"]}`}>
                        <span className={` ${id} ${styles["E855"]}`}>
                          {"Pro"}
                        </span>
                      </div>
                      <div className={` ${id} ${styles["E856"]}`}>
                        <div className={` ${id} ${styles["E857"]}`}>
                          <span className={` ${id} ${styles["E858"]}`}>
                            {msi.utils.toText(states?.proPricing) ?? "$5"}
                          </span>
                        </div>
                        <div className={` ${id} ${styles["E859"]}`}>
                          <span className={` ${id} ${styles["E860"]}`}>
                            {"/ user / month"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={` ${id} ${styles["E861"]}`}>
                      <ComponentsAtomsButton.Component
                        className={` ${id} ${styles["E862"]}`}
                        divProps={{
                          onClick: (originalEvent) => {
                            const event =
                              msi.utils.prepareMouseEvent(originalEvent);
                            router
                              .push("/sign-in", undefined, { scroll: false })
                              .then(() => {
                                document
                                  .querySelector("#__next")
                                  ?.scrollTo({ top: 0, left: 0 });
                              });
                          },
                        }}
                        properties={{ lable: "Buy Now Pro" }}
                        variant={["sizeSmall"]}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E863"]}`}
                        divProps={{}}
                        properties={{ title: "All from free plan." }}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E864"]}`}
                        divProps={{}}
                        properties={{
                          title: "Unlimited pull and push updates.",
                        }}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E865"]}`}
                        divProps={{}}
                        properties={{ title: "Unlimited export code." }}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E866"]}`}
                        divProps={{}}
                        properties={{ title: "5 Projects" }}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E867"]}`}
                        divProps={{}}
                        properties={{ title: "1gb max projects size." }}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E868"]}`}
                        divProps={{}}
                        properties={{ title: "Invite User (max 3)" }}
                      />
                    </div>
                  </div>
                </div>
                <div className={` ${id} ${styles["E869"]}`}>
                  <div className={` ${id} ${styles["E870"]}`}>
                    <div className={` ${id} ${styles["E871"]}`}>
                      <div className={` ${id} ${styles["E872"]}`}>
                        <span className={` ${id} ${styles["E873"]}`}>
                          {"Max\n"}
                        </span>
                      </div>
                      <div className={` ${id} ${styles["E874"]}`}>
                        <div className={` ${id} ${styles["E875"]}`}>
                          <span className={` ${id} ${styles["E876"]}`}>
                            {msi.utils.toText(states?.maxPricing) ?? "$15"}
                          </span>
                        </div>
                        <div className={` ${id} ${styles["E877"]}`}>
                          <span className={` ${id} ${styles["E878"]}`}>
                            {"/ user / month"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={` ${id} ${styles["E879"]}`}>
                      <ComponentsAtomsButton.Component
                        className={` ${id} ${styles["E880"]}`}
                        divProps={{
                          onClick: (originalEvent) => {
                            const event =
                              msi.utils.prepareMouseEvent(originalEvent);
                            router
                              .push("/sign-in", undefined, { scroll: false })
                              .then(() => {
                                document
                                  .querySelector("#__next")
                                  ?.scrollTo({ top: 0, left: 0 });
                              });
                          },
                        }}
                        properties={{ lable: "Buy now max" }}
                        variant={["sizeSmall"]}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E881"]}`}
                        divProps={{}}
                        properties={{ title: "All from pro plan." }}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E882"]}`}
                        divProps={{}}
                        properties={{ title: "Unlimited Projects." }}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E883"]}`}
                        divProps={{}}
                        properties={{ title: "Unlimted Project Size." }}
                      />
                      <ComponentsAtomsMark.Component
                        className={` ${id} ${styles["E884"]}`}
                        divProps={{}}
                        properties={{ title: "Unlimted invite user " }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ComponentsMoleculesFooter.Component
              className={` ${id} ${styles["E464"]}`}
              divProps={{}}
            />
          </>
        );
      }}
    </msi.resizeDetecter.ResponsiveDiv>
  );
};
