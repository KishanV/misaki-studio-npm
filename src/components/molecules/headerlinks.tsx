"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import * as ComponentsAtomsLink from "../atoms/link";
import styles from "./headerlinks.module.scss";

export type Props = { activeLink: string };
export const Variants = { row: undefined, columns: "E1065" };
export type Events = { onUse?: () => void };

export const DefaultProps: Props = { activeLink: "none" };

export const Component = ({
  className = "",
  style,
  divProps,
  properties = DefaultProps,
  variant,
  events,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  properties?: Props;
  variant?: (keyof typeof Variants)[];
  events?: Events;
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  const variants =
    variant?.map((id) => `${styles[(Variants as any)[id]]}`).join(" ") ?? "";
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className} ${variants} ${id} ${styles["E1066"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <ComponentsAtomsLink.Component
        className={`${variants} ${id} ${styles["E1067"]}`}
        divProps={{
          onClick: (originalEvent) => {
            const event = msi.utils.prepareMouseEvent(originalEvent);
            events?.onUse?.();
            router.push("/pricing/", undefined, { scroll: false }).then(() => {
              document.querySelector("#__next")?.scrollTo({ top: 0, left: 0 });
            });
          },
        }}
        properties={{ text: "Pricing" }}
        variant={properties?.activeLink === "pricing" ? ["active"] : []}
      />
      <ComponentsAtomsLink.Component
        className={`${variants} ${id} ${styles["E1068"]}`}
        divProps={{
          onClick: (originalEvent) => {
            const event = msi.utils.prepareMouseEvent(originalEvent);
            router.push("/blog/", undefined, { scroll: false }).then(() => {
              document.querySelector("#__next")?.scrollTo({ top: 0, left: 0 });
            });
          },
        }}
        properties={{ text: "Blog" }}
        variant={properties?.activeLink === "blog" ? ["active"] : []}
      />
      <ComponentsAtomsLink.Component
        className={`${variants} ${id} ${styles["E1069"]}`}
        divProps={{
          onClick: (originalEvent) => {
            const event = msi.utils.prepareMouseEvent(originalEvent);
            router.push("/docs/", undefined, { scroll: false }).then(() => {
              document.querySelector("#__next")?.scrollTo({ top: 0, left: 0 });
            });
          },
        }}
        properties={{ text: "Documents" }}
        variant={properties?.activeLink === "documents" ? ["active"] : []}
      />
      <ComponentsAtomsLink.Component
        className={`${variants} ${id} ${styles["E1070"]}`}
        divProps={{
          onClick: (originalEvent) => {
            const event = msi.utils.prepareMouseEvent(originalEvent);
            router.push("/contact/", undefined, { scroll: false }).then(() => {
              document.querySelector("#__next")?.scrollTo({ top: 0, left: 0 });
            });
          },
        }}
        properties={{ text: "Contact" }}
        variant={properties?.activeLink === "contact" ? ["active"] : []}
      />
      <ComponentsAtomsLink.Component
        className={`${variants} ${id} ${styles["E1071"]}`}
        divProps={{
          onClick: (originalEvent) => {
            const event = msi.utils.prepareMouseEvent(originalEvent);
            router.push("/aboutus/", undefined, { scroll: false }).then(() => {
              document.querySelector("#__next")?.scrollTo({ top: 0, left: 0 });
            });
          },
        }}
        properties={{ text: "About Us" }}
        variant={properties?.activeLink === "about-us" ? ["active"] : []}
      />
    </div>
  );
};
