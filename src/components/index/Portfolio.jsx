import { useEffect, useRef } from "react";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export default function Portfolio() {
  const portfolioRef = useRef(null);

  useEffect(() => {
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
      <div id="portfolio" ref={portfolioRef}>
        {" "}
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href="/src/assets/img/portfolio/fullsize/1.jpg"
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src="/src/assets/img/portfolio/thumbnails/1.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href="/src/assets/img/portfolio/fullsize/2.jpg"
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src="/src/assets/img/portfolio/thumbnails/2.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href="/src/assets/img/portfolio/fullsize/3.jpg"
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src="/src/assets/img/portfolio/thumbnails/3.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href="/src/assets/img/portfolio/fullsize/4.jpg"
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src="/src/assets/img/portfolio/thumbnails/4.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href="/src/assets/img/portfolio/fullsize/5.jpg"
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src="/src/assets/img/portfolio/thumbnails/5.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href="/src/assets/img/portfolio/fullsize/6.jpg"
                title="Project Name"
              >
                <img
                  className="img-fluid"
                  src="/src/assets/img/portfolio/thumbnails/6.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
