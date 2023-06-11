import type { VNode } from "preact/src/index";

type BackgroundProps = {
  children: (VNode | string)[];
};

export const Background = ({ children }: BackgroundProps) => {
  return (
    <div
      class="min-h-screen grid bg-gray-50 dark:bg-gray-800 dark:text-white"
      style={{ gridTemplateRows: "auto 1fr auto" }}
    >
      {children}
    </div>
  );
};
