import { useState, useEffect } from "react";
import Alert from "../utility/Alert";

// Definisikan URL di konstanta
const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL,
  GET_TOKEN: "/index",
  SUBMIT_FORM: "/contact",
};

const getTokenUrl = () => `${API_CONFIG.BASE_URL}${API_CONFIG.GET_TOKEN}`;
const getSubmitUrl = () => `${API_CONFIG.BASE_URL}${API_CONFIG.SUBMIT_FORM}`;

export default function Service() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
    device: navigator.userAgent,
    token: "",
  });

  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    status: "",
    message1: "",
    message2: "",
  });

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch(getTokenUrl());
        const data = await response.json();

        if (Array.isArray(data) && data.length >= 2 && data[1].token) {
          setFormData((prevState) => ({
            ...prevState,
            token: data[1].token,
          }));
        }
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, []);

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
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch(getSubmitUrl(), {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      const { status: responseStatus, message } = result;

      // Logika untuk menentukan alert berdasarkan response
      if (response.status === 200 && message === "Contact has send") {
        setAlertInfo({
          show: true,
          status: "success",
          message1: "Pesan berhasil terkirim!",
          message2: "Tunggu hingga devloper menangani hal itu.",
        });
        // Reset form jika berhasil
        setFormData({
          name: "",
          email: "",
          message: "",
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
          device: navigator.userAgent,
          token: formData.token,
        });
        setValidated(false);
      } else if (response.status === 503 && message === "Server are down") {
        setAlertInfo({
          show: true,
          status: "danger",
          message1: "Pesan gagal terkirim!",
          message2: "Terdapat kesalahan di server.",
        });
      } else if (response.status === 400) {
        if (message === "Data Request Does Not Exist") {
          setAlertInfo({
            show: true,
            status: "warning",
            message1: "Pesan gagal terkirim!",
            message2: "Kamu tidak mengirim apapun.",
          });
        } else if (message === "Incomplete Data Request") {
          setAlertInfo({
            show: true,
            status: "warning",
            message1: "Pesan gagal terkirim!",
            message2: "Kamu tidak mengirim data yang lengkap.",
          });
        }
      } else if (response.status === 404) {
        if (message === "Token not found") {
          setAlertInfo({
            show: true,
            status: "warning",
            message1: "Pesan gagal terkirim!",
            message2: "Token tidak ditemukan, silahkan refresh ulang halaman.",
          });
        } else if (message === "Token not valid") {
          setAlertInfo({
            show: true,
            status: "warning",
            message1: "Pesan gagal terkirim!",
            message2: "Token tidak valid.",
          });
        }
      }

      // Menghilangkan alert setelah 3 detik
      setTimeout(() => {
        setAlertInfo((prev) => ({ ...prev, show: false }));
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
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
                <input type="hidden" name="token" value={formData.token} />

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
