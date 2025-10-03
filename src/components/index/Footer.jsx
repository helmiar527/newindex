import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Footer({ onLoadComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <>
      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            Copyright &copy;{" "}
            <script>document.write(new Date().getFullYear())</script> HelmiAR527
          </div>
        </div>
      </footer>
    </>
  );
}

Footer.propTypes = {
  onLoadComplete: PropTypes.func.isRequired,
};
