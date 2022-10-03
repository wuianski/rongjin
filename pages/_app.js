import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/*** !!important when use router to query value from component. Use a React key to tell React to remount the component. ***/}
      <Component key={router.asPath} {...pageProps} />
    </>
  );
}

export default MyApp;
