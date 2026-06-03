"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../../settings/environment";
import { SVGs } from "../../../design-system/images";
import styles from "./welcomevideoitem.module.scss";

export type Props = { title: string; tumbnail?: any };
export type Children = { content?: React.ReactNode };

export const DefaultProps: Props = {
  title: "Video tutorial.",
  tumbnail: undefined,
};

export const Component = ({
  className = "",
  style,
  divProps,
  properties = DefaultProps,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  properties?: Props;
  children?: Children;
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  const screen_203 = (parameter: {}) => {
    return (
      <>
        <div
          {...divProps}
          style={{ ...style }}
          className={` ${id} ${styles["E204"]}`}
          ref={(element) => {
            (rootElement as any).current = element;
            divProps?.ref?.(element);
          }}
        >
          <div className={` ${id} ${styles["E205"]}`}>
            <div className={` ${id} ${styles["E206"]}`}>
              {
                <svg
                  preserveAspectRatio="meet"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="currentColor"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    d="M14.9531 12.3948C14.8016 13.0215 14.0857 13.4644 12.6539 14.3502C11.2697 15.2064 10.5777 15.6346 10.0199 15.4625C9.78934 15.3913 9.57925 15.2562 9.40982 15.07C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.40982 8.92995C9.57925 8.74381 9.78934 8.60868 10.0199 8.53753C10.5777 8.36544 11.2697 8.79357 12.6539 9.64983C14.0857 10.5356 14.8016 10.9785 14.9531 11.6052C15.0156 11.8639 15.0156 12.1361 14.9531 12.3948Z"
                    stroke-linejoin="round"
                  />
                  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
                </svg>
              }
            </div>
            <div className={` ${id} ${styles["E207"]}`}>
              <span className={` ${id} ${styles["E208"]}`}>{"Play "}</span>
            </div>
          </div>
          <div className={` ${id} ${styles["E209"]}`}>
            <div className={` ${id} ${styles["E210"]}`}>
              <span className={` ${id} ${styles["E211"]}`}>{"Preview"}</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E212"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <div className={` ${id} ${styles["E213"]}`}>
        <div className={` ${id} ${styles["E214"]}`}>
          <div className={` ${id} ${styles["E215"]}`}>
            <div className={` ${id} ${styles["E216"]}`}>
              {
                <svg
                  preserveAspectRatio="original"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="currentColor"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linejoin="round"
                >
                  <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" />
                </svg>
              }
            </div>
            <div className={` ${id} ${styles["E217"]}`}>
              <span className={` ${id} ${styles["E218"]}`}>
                {msi.utils.toText(properties?.title) ??
                  "Create button + export code."}
              </span>
            </div>
          </div>
        </div>
        <div className={` ${id} ${styles["E219"]}`}>
          <div
            className={` ${id} ${styles["E220"]}`}
            style={msi.utils.toStyle({ image: properties?.tumbnail })}
          >
            <div className={` ${id} ${styles["E221"]}`} />
            {children?.content}
          </div>
          <div className={` ${id} ${styles["E222"]}`}>
            <div className={` ${id} ${styles["E223"]}`}>{screen_203({})}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
