import { useEffect } from "react";
import PropTypes from "prop-types";

function Card({ icon, title, description }) {
  return (
    <div className="col-lg-3 col-md-6 text-center service-card">
      <div className="mt-5">
        <div className="mb-2">
          <i className={`bi ${icon} fs-1 text-primary`}></i>
        </div>
        <h3 className="h4 mb-2">{title}</h3>
        <p className="text-muted mb-0">{description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function Service() {
  useEffect(() => {
    const serviceCard = document.querySelectorAll(".service-card");

    serviceCard.forEach((card, i) => {
      card.dataset.aos = "flip-up";
      card.dataset.aosDelay = i * 100;
      card.dataset.aosDuration = 1000;
    });
  }, []);

  return (
    <>
      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0" data-aos="fade-up">
            Apa saja yang bisa digunakan?
          </h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <Card 
              icon="bi-clipboard-check-fill" 
              title="Management Keuangan" 
              description="Memanage keuangan dari pemasukan pengeluaran serta tabungan yang sudah terkumpul." 
            />
            <Card 
              icon="bi-journal-bookmark-fill" 
              title="Catatan Harian" 
              description="Memudahkan kita saat ingin mencatat sesuatu yang penting, atau Catatan Harian." 
            />
          </div>
        </div>
      </section>
    </>
  );
}