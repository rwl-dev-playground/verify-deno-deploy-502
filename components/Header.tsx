import { SITE_NAME } from "../utils/constant.ts";

export const Header = () => {
  return (
    <header class="w-full py-6 px-8 flex flex-col md:flex-row gap-4">
      <h1 class="text-2xl ml-1 font-bold dark:text-white">
        <a href="/">{SITE_NAME}</a>
      </h1>
    </header>
  );
};
