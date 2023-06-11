import { resolve } from "std/path/mod.ts";
import { getFileList } from "deno-util/file.ts";
import { Marked } from "./marked.ts";

const novelUrlList = await getFileList(resolve(Deno.cwd(), ".", "pieces"));

export type Meta = {
  title: string;
  description: string;
  publish: string;
  private: boolean;
  separation: "オリジナル" | "二次創作";
  tags: Array<string>;
  gore: boolean;
};

export type MarkdownList = Array<
  { meta: Meta; content: string; path: string } | undefined
>;

export const getMarkdownData = async (path: string) => {
  const markdown = await Deno.readTextFile(path);
  const { meta, content } = Marked.parse(markdown);
  return {
    meta: meta as Meta,
    content,
  };
};

export const getMarkdownDataList: MarkdownList = await Promise.all(
  novelUrlList.map(async (entry) => {
    if (entry.ext !== ".md") return;

    const { meta, content } = await getMarkdownData(entry.path);

    const path = entry.path
      .match(/(?<=pieces\/).*/)!
      .join("")
      .replace(".md", "");

    return {
      meta: meta as Meta,
      content,
      path,
    };
  }),
);
