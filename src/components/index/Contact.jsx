// Import environment variables
import { useState, useEffect } from "react";
import Alert from "../utility/Alert";
import useTokenStore from "../../services/token/tokenStore";
import ApiConfig from "../../config/ApiConfig";
import useErrorStore from "../../services/err/errorStore";

// Definisikan URL di konstanta
const { API_ENDPOINTS } = ApiConfig;

export default function Service() {
  // State contact
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    time: new Date()
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      .split(" ")[0],
    date: new Date().toLocaleDateString(),
    device: navigator.userAgent,
  });

  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    status: "",
    message1: "",
    message2: "",
  });

  // Menggunakan token dari store
  const { initializeToken, UseToken } = useTokenStore();

  // Inisialisasi token saat komponen mount
  useEffect(() => {
    const initToken = async () => {
      try {
        await initializeToken();
      } catch (error) {
        useErrorStore
          .getState()
          .addError("token_get_service_contact", "Failed to initialize token");
        setAlertInfo({
          show: true,
          status: "danger",
          message1: "Error!",
          message2: "Gagal mengambil token. Silakan refresh halaman.",
        });

        setTimeout(() => {
          setAlertInfo((prev) => ({ ...prev, show: false }));
        }, 3000);
      }
    };

    initToken();
  }, [initializeToken]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setIsLoading(true);

    try {
      // Dapatkan token dari store
      const token = UseToken();

      if (!token) {
        useErrorStore
          .getState()
          .addError("token_get_service_contact", "Token not found");
        setAlertInfo({
          show: true,
          status: "danger",
          message1: "Error!",
          message2: "Token tidak ada. Silakan refresh halaman.",
        });
      }

      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      const result = await response.json();
      const { message } = result;

      switch (response.status) {
        case 200:
          setAlertInfo({
            show: true,
            status: "success",
            message1: "Pesan berhasil terkirim!",
            message2: "Tunggu hingga devloper menangani hal itu.",
          });
          setFormData({
            name: "",
            email: "",
            message: "",
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
            device: navigator.userAgent,
          });
          break;
        case 400:
          switch (message) {
            case "Incomplete data request":
              setAlertInfo({
                show: true,
                status: "warning",
                message1: "Pesan gagal terkirim!",
                message2: "Kamu tidak mengirim data yang lengkap.",
              });
              break;
            case "Data request does not exist":
              setAlertInfo({
                show: true,
                status: "warning",
                message1: "Pesan gagal terkirim!",
                message2: "Kamu tidak mengirim apapun.",
              });
              break;
          }
          break;
        case 401:
          setAlertInfo({
            show: true,
            status: "warning",
            message1: "Pesan gagal terkirim!",
            message2: "Token tidak valid, silahkan refresh halaman.",
          });
          break;
        case 404:
          setAlertInfo({
            show: true,
            status: "warning",
            message1: "Pesan gagal terkirim!",
            message2: "Token tidak ditemukan, silahkan refresh halaman.",
          });
          break;
        case 503:
          setAlertInfo({
            show: true,
            status: "danger",
            message1: "Pesan gagal terkirim!",
            message2: "Terdapat kesalahan di server.",
          });
          break;
      }

      // Menghilangkan alert setelah 3 detik
      setTimeout(() => {
        setAlertInfo((prev) => ({ ...prev, show: false }));
      }, 3000);
    } catch (error) {
      setAlertInfo({
        show: true,
        status: "danger",
        message1: "Error!",
        message2: "Terjadi kesalahan saat mengirim form.",
      });

      // Menghilangkan alert setelah 3 detik
      setTimeout(() => {
        setAlertInfo((prev) => ({ ...prev, show: false }));
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0" data-aos="fade-up">
                Let&apos;s Get In Touch!
              </h2>
              <hr className="divider" />
              <p className="text-muted mb-5" data-aos="fade-down">
                Kirimkan pesan untuk mengirim masukkan web dan pemberitahuan bug
                yang ada.
              </p>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div className="col-lg-6">
              {alertInfo.show && (
                <Alert
                  status={alertInfo.status}
                  message1={alertInfo.message1}
                  message2={alertInfo.message2}
                />
              )}
              <form
                className={`needs-validation ${
                  validated ? "was-validated" : ""
                }`}
                noValidate
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="time" value={formData.time} />
                <input type="hidden" name="date" value={formData.date} />

                <div className="form-floating mb-3" data-aos="fade-right">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name..."
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="name">Full Name</label>
                  <div className="invalid-feedback">A name is required.</div>
                </div>

                <div className="form-floating mb-3" data-aos="fade-left">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="email">Email address</label>
                  <div className="invalid-feedback">An email is required.</div>
                  <div className="invalid-feedback">Email is not valid.</div>
                </div>

                <div className="form-floating mb-3" data-aos="fade-right">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                    value={formData.message}
                    onChange={handleInputChange}
                    minLength="10"
                    required
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  <div className="invalid-feedback">A message is required.</div>
                  <div className="invalid-feedback" id="feedback">
                    Minimum message 10 words.
                  </div>
                </div>

                <input type="hidden" name="device" value={formData.device} />

                <div className="d-grid">
                  {!isLoading ? (
                    <button
                      className="btn btn-primary btn-xl"
                      type="submit"
                      data-aos="fade-in"
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btn-xl"
                      type="button"
                      disabled
                    >
                      <span
                        className=" spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Loading...
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
