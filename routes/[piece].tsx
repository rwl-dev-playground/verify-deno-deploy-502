import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getMarkdownData } from "../core/getData.ts";
import { Background } from "../components/Background.tsx";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import { SITE_NAME } from "../utils/constant.ts";

type HandlerProps = {
  content: string;
  piece: string;
};

export const handler: Handlers<HandlerProps> = {
  async GET(_, ctx) {
    const { piece } = ctx.params;
    try {
      const { content } = await getMarkdownData(piece);
      return ctx.render({ content, piece });
    } catch (error) {
      return ctx.renderNotFound();
    }
  },
};

export default function PiecePage({ data, url }: PageProps<HandlerProps>) {
  const { piece, content } = data;
  return (
    <Background>
      <Head>
        <title>{`${piece} | ${SITE_NAME}`}</title>
        <link rel="icon" href="/icon.jpg" />
        <meta property="og:title" content={`${piece} | ${SITE_NAME}`} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="説明" />
        <meta property="og:url" content={url.href} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${url.origin}/icon.jpg`} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Header />
      <main class="p-4 mx-auto max-w-screen-md w-full">
        <section class="mt-10">
          <h2 class="text-2xl font-bold dark:text-white">{piece}</h2>
          <div
            class="mt-10 dark:text-white"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>
      </main>
      <Footer />
    </Background>
  );
}
