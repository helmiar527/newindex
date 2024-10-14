export default function About() {
  return (
    <>
      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0" data-aos="fade-up">
                Bermacam - macam Aplikasi
              </h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4" data-aos="fade-down">
                Terdapat cukup banyak aplikasi di antaranya Managemen Uang,
                Catatan penting maupun Harian, Managemen Tabungan, dan masih
                banyak lagi.
              </p>
              <a
                className="btn btn-light btn-xl about1"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#comingModal"
                data-aos="fade-right"
              >
                Lebih Lanjut
              </a>
              <a
                className="btn btn-light btn-xl"
                href="#services"
                data-aos="fade-left"
              >
                Lainnya
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
