import Head from "next/head";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Moorhouse Coating</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #2b2a2a
            url(https://dta0yqvfnusiq.cloudfront.net/jimen84592897/2019/07/Main-BG-5d3f65ac25f68.jpg);
          background-size: cover;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default MyApp;
