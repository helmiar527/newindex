import { useEffect } from "react";
import iconImage from "../../assets/img/icon.png";
import { gsap } from "gsap/dist/gsap";
// import NavLogin from "./NavLogin";

export default function Nav() {
  useEffect(() => {
    gsap.from(".main-nav-1", {
      opacity: 0,
      duration: 1,
      y: -100,
      onComplete: () => {
        gsap.to(".main-nav-1", { opacity: 1, y: 0 });
      },
    });
    gsap.from(".main-nav-2", {
      opacity: 0,
      duration: 1,
      delay: 0.1,
      y: -100,
      onComplete: () => {
        gsap.to(".main-nav-2", { opacity: 1, y: 0 });
      },
    });

    gsap.from(".main-nav-3", {
      opacity: 0,
      duration: 1,
      delay: 0.2,
      y: -100,
      onComplete: () => {
        gsap.to(".main-nav-3", { opacity: 1, y: 0 });
      },
    });

    gsap.from(".main-nav-4", {
      opacity: 0,
      duration: 1,
      delay: 0.3,
      y: -100,
      onComplete: () => {
        gsap.to(".main-nav-4", { opacity: 1, y: 0 });
      },
    });

    gsap.from(".main-nav-5", {
      opacity: 0,
      duration: 1,
      delay: 0.4,
      y: -100,
      onComplete: () => {
        gsap.to(".main-nav-5", { opacity: 1, y: 0 });
      },
    });

    gsap.from(".main-nav-6", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      y: -100,
      onComplete: () => {
        gsap.to(".main-nav-6", { opacity: 1, y: 0 });
      },
    });

    // gsap.from(".main-nav-7", {
    //   opacity: 0,
    //   duration: 1,
    //   delay: 0.6,
    //   y: -100,
    //   onComplete: () => {
    //     gsap.to(".main-nav-7", { opacity: 1, y: 0 });
    //   },
    // });

    const navLinks = document.querySelectorAll(".nav-link");
    const setActiveLink = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 74;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          const id = section.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", () => {
      setActiveLink();
    });

    const navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector("#mainNav");
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    navbarShrink();

    document.addEventListener("scroll", navbarShrink);

    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
      const initScrollSpy = () => {
        if (window.bootstrap && window.bootstrap.ScrollSpy) {
          new window.bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            offset: 74,
          });
        } else {
          setTimeout(initScrollSpy, 100);
        }
      };
      initScrollSpy();
    }

    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });

    return () => {
      document.removeEventListener("scroll", navbarShrink);
      responsiveNavItems.forEach((item) => {
        item.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand main-nav-1" href="/">
            <img
              src={iconImage}
              alt="Icon"
              width="30"
              height="30"
              style={{ marginRight: "8px" }}
            />
            HELMIAR527
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item main-nav-2">
                <a className="nav-link" href="#page-top">
                  Home
                </a>
              </li>
              <li className="nav-item main-nav-3">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item main-nav-4">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item main-nav-5">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item main-nav-6">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              {/* <NavLogin /> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
