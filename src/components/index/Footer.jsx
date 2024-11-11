export default function Footer() {
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
