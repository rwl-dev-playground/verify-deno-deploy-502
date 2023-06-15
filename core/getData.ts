import { Marked } from "./marked.ts";

export type Meta = {
  title: string;
  description: string;
  publish: string;
  private: boolean;
  separation: "オリジナル" | "二次創作";
  tags: Array<string>;
  gore: boolean;
};

export const getMarkdownData = async (piece: string) => {
  const markdown = await Deno.readTextFile(`./pieces/${piece}.md`);
  const { meta, content } = Marked.parse(markdown);
  return {
    meta: meta as Meta,
    content,
  };
};
