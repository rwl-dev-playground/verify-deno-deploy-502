import { Marked, Renderer } from "markdown";

class CustomRenderer extends Renderer {
  paragraph(text: string): string {
    return `<p style="margin-top: 20px">${text}</p>`;
  }
  text(text: string): string {
    const base = {
      ruby: "<ruby>$1<rt>$2</rt></ruby>",
      emphasis: "<strong>$1</strong>",
      subtitle: `<h2 id="$1">$1</h2>`,
    } as const;
    const regex = {
      ruby: /[|｜](.+?)《(.+?)》/g,
      emphasis: /《《(.+?)》》/g,
      subtitle: /^\#\# (.+?)$/g,
    };

    return text
      .replace(regex.ruby, base.ruby)
      .replace(regex.emphasis, base.emphasis);
  }
}

Marked.setOptions({ renderer: new CustomRenderer() });
export { Marked };
