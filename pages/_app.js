import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import "keen-slider/keen-slider.min.css";
/** react-slick css (slider) **/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { scrollIntoView } from "seamless-scroll-polyfill";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // useEffect(() => {
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      <DefaultSeo
        title="榕錦時光 Rongjin Gorgeous Time"
        description="榕錦時光 Rongjin Gorgeous Time : 點亮大安區，成為幸福的場所。 To brighten Da'an district and turn it into a place of delight."
        canonical="https://rongjintimes.com/"
        openGraph={{
          type: "website",
          locale: "zh_TW",
          url: "https://rongjintimes.com/",
          site_name: "榕錦時光 Rongjin Gorgeous Time",
          title: "榕錦時光 Rongjin Gorgeous Time",
          description:
            "榕錦時光 Rongjin Gorgeous Time : 點亮大安區，成為幸福的場所。 To brighten Da'an district and turn it into a place of delight.",
          images: [
            {
              url: "/imgs/logo.png",
              width: 1724,
              height: 836,
              alt: "Rongjin Gorgeous Time",
            },
          ],
        }}
      />
      {/*** !!important when use router to query value from component. Use a React key to tell React to remount the component. ***/}
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: 1,
            y: [1000, 0],
            transition: { duration: 0.3 },
          }}
          exit={{
            opacity: [1, 1],
            y: [0, -1000],
            transition: { duration: 0.5 },
          }}
          className="content"
        >
          <Component key={router.route} {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
