import Head from "next/head";
import { LinkCard } from "../components/LinkCard/LinkCard";

export default function Home() {
  return (
    <div className="px-8 py-0">
      <Head>
        <title>TNT - Nextjs boilerplate Super-Power</title>
        <meta
          name="description"
          content="nextjs boilerplate created by Arvin Mostafaei"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center flex-grow min-h-screen px-0 py-16">
        <h1 className="m-0 text-6xl">
          Welcome to{" "}
          <a
            className="text-blue-600 no-underline"
            href="https://github.com/arviinmo/TNT-boilerplate"
            title="TypeScript + Nextjs + Tailwind"
          >
            TNT!
          </a>
        </h1>

        <p className="mx-0 my-10 mt-4 text-3xl leading-normal">
          customized Nextjs boilerplate
        </p>

        <div className="flex flex-wrap items-center justify-center max-w-[800px] mt-10">
          {LinkCard(
            "/removeWhiteSpaces",
            "Remove Pesky Whitespaces",
            "Remove white spaces from your text"
          )}
        </div>
      </main>
    </div>
  );
}
