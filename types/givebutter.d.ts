import type { DetailedHTMLProps, HTMLAttributes } from "react";

type GivebutterAttributes = HTMLAttributes<HTMLElement>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "givebutter-widget": DetailedHTMLProps<
        GivebutterAttributes & {
          id?: string;
        },
        HTMLElement
      >;
      "givebutter-giving-form": DetailedHTMLProps<
        GivebutterAttributes & {
          campaign?: string;
          "show-goal-bar"?: string | boolean;
          "theme-color"?: string;
          "max-width"?: string;
          "max-height"?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
