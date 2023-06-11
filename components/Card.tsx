import { LinkButton } from "./Link.tsx";
import type { VNode } from "preact/src/index";

type CardProps = {
  title: string;
  children: VNode | string;
  link: string;
  external?: boolean;
};

export const Card = ({ title, children, link, external }: CardProps) => {
  return (
    <section class="rounded border(gray-500 2) p-3 dark:(text-white border-gray-300)">
      <h3 class="text-xl flex item-center gap-1">{title}</h3>
      {children}
      <LinkButton css="mt-4 text-right" url={link} external={external}>
        閲覧する
      </LinkButton>
    </section>
  );
};
