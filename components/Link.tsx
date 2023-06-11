import type { VNode } from "preact/src/index";

type LinkProps = {
  css?: string;
  url: string;
  external?: boolean;
  children: VNode | string;
};

export const Link = ({ css, url, external, children }: LinkProps) => {
  return (
    <a
      class={`underline ${css}`}
      href={url}
      target={external ? "_blank" : ""}
      rel={external ? "noopener noreferrer" : ""}
    >
      {children}
    </a>
  );
};

export const LinkButton = ({ css, url, external, children }: LinkProps) => {
  return (
    <a
      class={`inline-block px-3 py-2 bg-blue-200 text-blue-800 rounded hover:bg-blue-300 active:bg-blue-400 ${css}`}
      href={url}
      target={external ? "_blank" : ""}
      rel={external ? "noopener noreferrer" : ""}
    >
      {children}
    </a>
  );
};
