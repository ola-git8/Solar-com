export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <div className="mb-2">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-3 icon"
            aria-label=""
          >
            <i className="bi bi-instagram icon" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a
           
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-3 icon"
            aria-label=""
          >
            <i className="bi bi-linkedin " style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a
            href=""
            className="text-white me-3 icon"
            aria-label=""
          >
            <i className="bi bi-envelope icon" style={{ fontSize: "1.5rem" }}></i>
          </a>
        </div>
        <p className="mb-1">
          © {currentYear} Solar-com. All rights reserved.
        </p>
        <p className="mb-0">
          Built with <i className="bi bi-heart-fill text-danger"></i> by{" "}
          <span className="fw-semibold">OlaDev</span>
        </p>
      </div>
    </footer>
  );
}
