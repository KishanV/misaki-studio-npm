"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import styles from "./authusers.module.scss";

export type Props = {
  users: { email: string; userName: string; jwt: string }[];
};
export type Events = {
  select?: (param: { email: string; userName: string; jwt: string }) => void;
};

export const DefaultProps: Props = {
  users: [{ email: "email@gmail.com", userName: "User Name", jwt: "..." }],
};

export const Component = ({
  className = "",
  style,
  divProps,
  properties = DefaultProps,
  events,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  properties?: Props;
  events?: Events;
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  const screen_302 = (parameter: {
    email: string;
    userName: string;
    jwt: string;
  }) => {
    return (
      <>
        <div
          {...divProps}
          style={{ ...style }}
          className={` ${id} ${styles["E303"]}`}
          ref={(element) => {
            (rootElement as any).current = element;
            divProps?.ref?.(element);
          }}
          onClick={(originalEvent) => {
            const event = msi.utils.prepareMouseEvent(originalEvent);
            events?.select?.({
              email: parameter?.email,
              userName: parameter?.userName,
              jwt: parameter?.jwt,
            });
            divProps?.onClick?.(originalEvent);
          }}
        >
          <div className={` ${id} ${styles["E304"]}`}>
            <div className={` ${id} ${styles["E305"]}`}>
              <span className={` ${id} ${styles["E306"]}`}>
                {msi.utils.toText(parameter?.userName) ?? "User Name"}
              </span>
            </div>
            <div className={` ${id} ${styles["E307"]}`}>
              <span className={` ${id} ${styles["E308"]}`}>
                {msi.utils.toText(parameter?.email) ?? "Email@test.com"}
              </span>
            </div>
          </div>
          <div className={` ${id} ${styles["E309"]}`} />
        </div>
      </>
    );
  };
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E310"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <div className={` ${id} ${styles["E311"]}`}>
        <span className={` ${id} ${styles["E312"]}`}>{"Sign In App With"}</span>
      </div>
      {msi.utils.loopOnArray(properties.users, (item, index, isLastStep) => {
        const output = { item, step: index, isLastStep };
        const level_2 = { repeater: { output } };
        return (
          <>
            <div className={` ${id} ${styles["E313"]}`}>
              {screen_302({
                email: level_2?.repeater?.output?.item?.email,
                userName: level_2?.repeater?.output?.item?.userName,
                jwt: level_2?.repeater?.output?.item?.jwt,
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};
