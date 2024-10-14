export default function Services() {
  return (
    <>
      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0" data-aos="fade-up">
            Apa saja yang bisa digunakan?
          </h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <card className="col-lg-3 col-md-6 text-center service-card">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-clipboard-check-fill fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Management Keuangan</h3>
                <p className="text-muted mb-0">
                  Memanage keuangan dari pemasukan pengeluaran serta tabungan
                  yang sudah terkumpul.
                </p>
              </div>
            </card>
            <div className="col-lg-3 col-md-6 text-center service-card">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-journal-bookmark-fill fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Catatan Harian</h3>
                <p className="text-muted mb-0">
                  Memudahkan kita saat ingin mencatat sesuatu yang penting, atau
                  Catatan Harian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
