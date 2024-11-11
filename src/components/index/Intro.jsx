import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Intro() {
  useEffect(() => {
    gsap.to(".welcome", {
      duration: 3,
      text: "Welcome To My Website HelmiAR527",
    });
    gsap.from(".desc", {
      opacity: 0,
      delay: 0.5,
      duration: 1,
      y: -100,
      onComplete: () => {
        gsap.to(".desc", { opacity: 1, y: 0 });
      },
    });

    gsap.from(".taucari", {
      opacity: 0,
      delay: 1,
      duration: 1,
      onComplete: () => {
        gsap.to(".taucari", { opacity: 1 });
      },
    });
  });
  return (
    <>
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold welcome"></h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5 desc">
                Di sini saya mencoba membuat aplikasi - aplikasi yang sekiranya
                cukup membantu.
              </p>
              <a className="btn btn-primary btn-xl taucari" href="#about">
                Cari Tau
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
