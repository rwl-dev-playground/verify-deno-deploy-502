export const getMarkdownData = async (piece: string) => {
  const content = await Deno.readTextFile(`./pieces/${piece}.md`);
  return {content}
}