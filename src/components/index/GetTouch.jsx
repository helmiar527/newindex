import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function GetTouch() {
  useEffect(() => {
    gsap.to(".index1", {
      scrollTrigger: ".index1",
      duration: 3,
      text: "Convenience in every activity.",
    });
  });
  return (
    <>
      <section className="page-section bg-dark text-white">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mb-4 index1"></h2>
          <a
            className="btn btn-light btn-xl"
            href="/register"
            data-aos="zoom-out"
          >
            Register Now
          </a>
        </div>
      </section>
    </>
  );
}
