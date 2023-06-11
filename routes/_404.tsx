import { UnknownPageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Background } from "../components/Background.tsx";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import { SITE_NAME } from "../utils/constant.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <Background>
      <Head>
        <title>{`404 Not Found | ${SITE_NAME}`}</title>
        <link rel="icon" href="/icon.jpg" />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="説明" />
        <meta property="og:url" content={url.href} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${url.origin}/icon.jpg`} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Header />
      <main class="p-4 mx-auto max-w-screen-md w-full">
        <section class="mt-10">
          <h2 class="text-2xl font-bold dark:text-white">404 Not Found</h2>
          <p class="mt-5">
            {url.pathname}
            は見つかりませんでした。
            <br />
            サイトのタイトルを押下してTOPページに戻ってください。
          </p>
        </section>
      </main>
      <Footer />
    </Background>
  );
}
