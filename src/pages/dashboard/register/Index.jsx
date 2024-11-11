import { HelmetProvider, Helmet } from "react-helmet-async";
import "../../../components/dashboard/css/materialdesignicons.min.css";
import "../../../components/dashboard/css/vendor.bundle.base.css";
import "../../../components/dashboard/css/style.css";
import Index from "../../../components/dashboard/register/Index";

export default function RegisterIndex() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Register</title>
        </Helmet>
      </HelmetProvider>
      <Index />
    </>
  );
}
