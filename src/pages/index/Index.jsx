import { Helmet } from "react-helmet-async";
import Style from "../../components/index/css/style.css";
import Jsindex from "../../components/index/js/Jsindex";
import Nav from "../../components/index/Nav";
import Header from "../../components/index/Header";
import About from "../../components/index/About";
import Services from "../../components/index/Services";

export default function Index() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Welcome To HELMIAR527</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css"
          rel="stylesheet"
        />
        <link href={Style} rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Helmet>
      <div id="page-top">
        <Nav />
        <Header />
        <About />
        <Services />
      </div>
      <Jsindex />
    </>
  );
}
