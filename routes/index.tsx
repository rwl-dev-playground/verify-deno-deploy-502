import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import "std/dotenv/load.ts";
import { Background } from "../components/Background.tsx";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { SITE_NAME } from "../utils/constant.ts";

export default function Home({ url }: PageProps) {

  return (
    <Background>
      <Head>
        <title>{SITE_NAME}</title>
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
        <section class="flex gap-4 flex-col items-center sm:flex-row sm:items-start">
          <div class="order-2">
            <h2 class="text-2xl font-bold dark:text-white">作者名</h2>
            <p class="mt-5 dark:text-white">認証されてない</p>
          </div>
          <figure class="order-1 w-1/2 sm:w-1/4">
            <img class="w-full rounded-full" src="icon.jpg" alt="" />
          </figure>
        </section>
        <section class="mt-10">
          <h2 class="text-2xl font-bold dark:text-white">オリジナル作品</h2>
          <div class="mt-5 grid grid-cols-1 gap-4 items-start">
          <p>表示できる作品がありません</p>
          </div>
        </section>
        <section class="mt-10">
          <h2 class="text-2xl font-bold dark:text-white">二次創作作品</h2>
          <div class="mt-5 grid grid-cols-1 gap-4 items-start">
          <p>表示できる作品がありません</p>
          </div>
        </section>
      </main>
      <Footer />
    </Background>
  );
}
