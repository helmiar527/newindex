import "../../components/index/js/global";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useEffect } from "react";
import PropTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../assets/css/index/styles.css";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import Nav from "../../components/index/Nav";
import Intro from "../../components/index/Intro";
import Service from "../../components/index/Service";
import About from "../../components/index/About";
import Portfolio from "../../components/index/Portfolio";
import GetTouch from "../../components/index/GetTouch";
import Contact from "../../components/index/Contact";
import Footer from "../../components/index/Footer";

export default function Index({ onLoadComplete }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });

  });
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
        <About />
        <Service />
        <Portfolio />
        <GetTouch />
        <Contact />
        <Footer onLoadComplete={onLoadComplete} />
      </section>
    </>
  );
}

Index.propTypes = {
  onLoadComplete: PropTypes.func.isRequired,
};
