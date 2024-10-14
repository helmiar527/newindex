export default function Header() {
  return (
    <>
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold welcome">
                Welcome To My Website HelmiAR527
              </h1>
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
