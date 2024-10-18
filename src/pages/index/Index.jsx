import "../../components/index/js/global"
import { HelmetProvider, Helmet } from "react-helmet-async";
import "bootstrap-icons/font/bootstrap-icons.css";
import "/src/components/index/css/styles.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "/src/components/index/js/scripts.js";
import Nav from "../../components/index/Nav";
import Intro from "../../components/index/Intro";
import Service from "../../components/index/Service";
import Portfolio from "../../components/index/Portfolio";

export default function Index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Welcome To HELMIAR527</title>
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic"
            rel="stylesheet"
            type="text/css"
          />
        </Helmet>
      </HelmetProvider>
      <section id="page-top">
        <Nav />
        <Intro />
        <Service />
        <Portfolio />
      </section>
    </>
  );
}
