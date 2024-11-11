import { useEffect, useRef } from "react";
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

export default function Portfolio() {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const img = document.querySelectorAll(".img-fluid");

    img.forEach((img, i) => {
      img.dataset.aos = "zoom-in";
      img.dataset.aosDelay = i * 100;
      img.dataset.aosDuration = 1000;
    });

    const lightbox = new SimpleLightbox(
      portfolioRef.current.querySelectorAll("a.portfolio-box"),
      {}
    );

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <>
      <section id="portfolio" ref={portfolioRef}>
        {" "}
        <div className="project">
          <div className="container-fluid p-0">
            <h2 className="text-center mt-0" data-aos="fade-up">
              Dashboard Project
            </h2>
            <hr className="divider" />
            <div className="row g-0">
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="/src/assets/img/portfolio/dashboard/register.PNG"
                  title="Register Page"
                >
                  <img
                    className="img-fluid"
                    src="/src/assets/img/portfolio/dashboard/register.PNG"
                    alt="Register Page"
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Register Page
                    </div>
                    <div className="project-name">Dashboard Register</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="/src/assets/img/portfolio/dashboard/login.PNG"
                  title="Login Page"
                >
                  <img
                    className="img-fluid"
                    src="/src/assets/img/portfolio/dashboard/login.PNG"
                    alt="Login Page"
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Login Page
                    </div>
                    <div className="project-name">Dashboard Login</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="/src/assets/img/portfolio/dashboard/dashboard.PNG"
                  title="Dashboard Page"
                >
                  <img
                    className="img-fluid"
                    src="/src/assets/img/portfolio/dashboard/dashboard.PNG"
                    alt="Dashboard Page"
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Dashboard Page
                    </div>
                    <div className="project-name">Dashboard</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="/src/assets/img/portfolio/dashboard/setting.PNG"
                  title="Setting Page"
                >
                  <img
                    className="img-fluid"
                    src="/src/assets/img/portfolio/dashboard/setting.PNG"
                    alt="Setting Page"
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Setting Page
                    </div>
                    <div className="project-name">Dashboard Setting</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
