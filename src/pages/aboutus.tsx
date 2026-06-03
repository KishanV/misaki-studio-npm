"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../settings/environment";
import { SVGs } from "../design-system/images";
import * as ComponentsAtomsMark from "../components/atoms/mark";
import * as ComponentsAtomsButton from "../components/atoms/button";
import * as ComponentsMoleculesPagehero from "../components/molecules/pagehero";
import * as ComponentsMoleculesAnimatedheader from "../components/molecules/animatedheader";
import * as ComponentsMoleculesFooter from "../components/molecules/footer";
import styles from "./aboutus.module.scss";

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
              properties={{ activeLink: "about-us" }}
            />
            <ComponentsMoleculesPagehero.Component
              className={` ${id} ${styles["E447"]}`}
              divProps={{}}
              properties={{
                title: "About Us",
                description: "",
                tag: undefined,
              }}
            />
            <div className={` ${id} ${styles["E448"]}`}>
              <div className={` ${id} ${styles["E1339"]}`}>
                <div className={` ${id} ${styles["E1340"]}`}>
                  <span className={` ${id} ${styles["E1341"]}`}>
                    {"Redefining the boundary between design and code."}
                  </span>
                </div>
                <div className={` ${id} ${styles["E1342"]}`}>
                  <span className={` ${id} ${styles["E1343"]}`}>
                    {
                      "This means making the process of designing and coding more connected and seamless. Traditionally, designers create visuals and developers turn them into code — two separate roles. But Misaki Studio allow designers to build fully functional websites without needing a developer, and developers to work more visually.\n\nIn short, it's about removing the wall between creativity and functionality, allowing both design and code to exist in the same space."
                    }
                  </span>
                </div>
                <div className={` ${id} ${styles["E1344"]}`}>
                  <span className={` ${id} ${styles["E1345"]}`}>
                    {
                      "Single tool to build website, design system and user interfcae."
                    }
                  </span>
                </div>
                <div className={` ${id} ${styles["E1346"]}`}>
                  <span className={` ${id} ${styles["E1347"]}`}>
                    {
                      'Different kinds of websites require different tools. If you need advanced features, coding is often necessary. And if you want full control over the user interface and user experience, coding usually becomes essential.\n\nBut with Misaki Studio, you can achieve both — advanced functionality and complete design control — without writing code.\n\nThat said, code is still more powerful in edge cases. That’s why our Export to Code feature is useful — it lets you extend your project beyond the built-in capabilities of Misaki Studio."'
                    }
                  </span>
                </div>
              </div>
              <div className={` ${id} ${styles["E1348"]}`}>
                <div className={` ${id} ${styles["E1349"]}`}>
                  <span className={` ${id} ${styles["E1350"]}`}>
                    {"Our story."}
                  </span>
                </div>
                <div className={` ${id} ${styles["E1351"]}`}>
                  <span className={` ${id} ${styles["E1352"]}`}>
                    {
                      "It was simple: I saw so many startups fail to make design-to-code actually work. So, I started building Misaki Studio — because it's a hard problem, it's interesting, and most importantly, it's incredibly useful to a lot of people."
                    }
                  </span>
                </div>
              </div>
              <div className={` ${id} ${styles["E1353"]}`}>
                <div className={` ${id} ${styles["E1354"]}`}>
                  <div className={` ${id} ${styles["E1355"]}`}>
                    <div
                      className={` ${id} ${styles["E1356"]}`}
                      onClick={(originalEvent) => {
                        const event =
                          msi.utils.prepareMouseEvent(originalEvent);
                        router
                          .push("https://x.com/Kishan_Devani_", undefined, {
                            scroll: false,
                          })
                          .then(() => {
                            document
                              .querySelector("#__next")
                              ?.scrollTo({ top: 0, left: 0 });
                          });
                      }}
                    >
                      <div className={` ${id} ${styles["E1357"]}`} />
                    </div>
                  </div>
                  <div className={` ${id} ${styles["E1358"]}`}>
                    <div className={` ${id} ${styles["E1359"]}`}>
                      <span className={` ${id} ${styles["E1360"]}`}>
                        {"Kishan Devani"}
                      </span>
                    </div>
                    <div className={` ${id} ${styles["E1361"]}`}>
                      <span className={` ${id} ${styles["E1362"]}`}>
                        {
                          "Founder & CEO. \nex HP Worked at 6 startups as full stack developer."
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={` ${id} ${styles["E1363"]}`}>
                <div className={` ${id} ${styles["E1364"]}`}>
                  <span className={` ${id} ${styles["E1365"]}`}>
                    {"Our Team"}
                  </span>
                </div>
                <div className={` ${id} ${styles["E1366"]}`}>
                  <div className={` ${id} ${styles["E1367"]}`}>
                    <div className={` ${id} ${styles["E1368"]}`}>
                      <div
                        className={` ${id} ${styles["E1369"]}`}
                        onClick={(originalEvent) => {
                          const event =
                            msi.utils.prepareMouseEvent(originalEvent);
                          router
                            .push("https://x.com/dipak_gadhiya", undefined, {
                              scroll: false,
                            })
                            .then(() => {
                              document
                                .querySelector("#__next")
                                ?.scrollTo({ top: 0, left: 0 });
                            });
                        }}
                      >
                        <div className={` ${id} ${styles["E1370"]}`} />
                      </div>
                    </div>
                    <div className={` ${id} ${styles["E1371"]}`}>
                      <div className={` ${id} ${styles["E1372"]}`}>
                        <span className={` ${id} ${styles["E1373"]}`}>
                          {"Dipak"}
                        </span>
                      </div>
                      <div className={` ${id} ${styles["E1374"]}`}>
                        <span className={` ${id} ${styles["E1375"]}`}>
                          {"software engineer & designer "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={` ${id} ${styles["E1376"]}`}>
                    <div className={` ${id} ${styles["E1377"]}`}>
                      <div
                        className={` ${id} ${styles["E1378"]}`}
                        onClick={(originalEvent) => {
                          const event =
                            msi.utils.prepareMouseEvent(originalEvent);
                          router
                            .push("https://x.com/vish_dev09", undefined, {
                              scroll: false,
                            })
                            .then(() => {
                              document
                                .querySelector("#__next")
                                ?.scrollTo({ top: 0, left: 0 });
                            });
                        }}
                      >
                        <div className={` ${id} ${styles["E1379"]}`} />
                      </div>
                    </div>
                    <div className={` ${id} ${styles["E1380"]}`}>
                      <div className={` ${id} ${styles["E1381"]}`}>
                        <span className={` ${id} ${styles["E1382"]}`}>
                          {"Vishal"}
                        </span>
                      </div>
                      <div className={` ${id} ${styles["E1383"]}`}>
                        <span className={` ${id} ${styles["E1384"]}`}>
                          {"software engineer & designer "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={` ${id} ${styles["E1385"]}`}>
                    <div className={` ${id} ${styles["E1386"]}`}>
                      <div
                        className={` ${id} ${styles["E1387"]}`}
                        onClick={(originalEvent) => {
                          const event =
                            msi.utils.prepareMouseEvent(originalEvent);
                          router
                            .push("https://x.com/Jasoliyaharsh1", undefined, {
                              scroll: false,
                            })
                            .then(() => {
                              document
                                .querySelector("#__next")
                                ?.scrollTo({ top: 0, left: 0 });
                            });
                        }}
                      >
                        <div className={` ${id} ${styles["E1388"]}`} />
                      </div>
                    </div>
                    <div className={` ${id} ${styles["E1389"]}`}>
                      <div className={` ${id} ${styles["E1390"]}`}>
                        <span className={` ${id} ${styles["E1391"]}`}>
                          {"Harsh"}
                        </span>
                      </div>
                      <div className={` ${id} ${styles["E1392"]}`}>
                        <span className={` ${id} ${styles["E1393"]}`}>
                          {"software engineer & designer "}
                        </span>
                      </div>
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
